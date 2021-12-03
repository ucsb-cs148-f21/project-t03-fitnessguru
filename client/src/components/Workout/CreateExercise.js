import React from "react";
import {useState} from "react";
import $ from "jquery";
import 'bootstrap';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import "./CreateExercise.css";
import Loader from 'react-loader-spinner';

function objectID() {
    const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    return(ObjectId);
}

const ExxCategory = ({title, category, user, workoutID, handleAddExercise}) => {

    const [exercises, setExercises] = useState();
    const [loading, setLoading] = useState(true);

    const handleCreateExerciseObject = () => {
        setCustom(false);
        exercise.workout = workoutID;
        exercise._id = exxID;
        exercise.googleID = user.id;
        exercise.name = document.getElementById("exerciseName").value;
        exercise.description = document.getElementById("exerciseNotes").value;
        axios.post("/exercises", exercise)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        if(handleAddExercise)
            handleAddExercise(exercise);
    };
    
    axios.get(`https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=${category}`)
            .then((res) => setExercises(res.data.results))
            .then(() => setLoading(false))
            .catch((error) => console.log(error))

    return(
    <div className="dropdown">
        <DropdownButton id="dropdown-item-button" title={title}>
            {loading && <Loader id="loadingIcon" type="TailSpin" color="black" height={50} width={50}/>}
            {!loading && 
            <div id="exercises-dropdown">
                {exercises && exercises.map(exercise => <Exx e={exercise} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>)}
            </div>}
        </DropdownButton>
    </div>
    )
}

const Exx = ({e, user, workoutID, handleAddExercise}) => {

    let exercise = {};
    const [show, setShow] = useState(false);
    const [exxID, setExxID] = useState(objectID())

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let front = [];
    let back = [];
  
    const isFront = new Map([[2, true], [1, true], [11, false], [13, true], [7, false], [8, false], [12, false], [14, true], [4, true], [10, true],
                    [6, true], [3, true], [15, false], [9, false], [5, false]]);

    for(let i = 0; i < e.muscles.length; i++){
        const primary = e.muscles[i];
        if(isFront.get(primary) == true){
            front.push(primary);
        }
        else if(isFront.get(primary) == false){
            back.push(primary);
        }
        
    }

    const handleAddExx = () => {
        exercise.name = e.name;
        exercise.description = e.description;
        exercise.workout = workoutID;
        exercise.googleId = user.id;
        exercise._id = exxID;
        console.log("NEW EXERCISE: ");
        console.log(exercise)
        console.log(exercise._id);
        axios.post("/exercises", exercise)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        if(handleAddExercise)
            handleAddExercise(exercise)
        handleClose();
    }

    return (
    <div className="exercise">
        <Button variant="primary" onClick={handleShow}>
            {e.name}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{e.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {ReactHtmlParser(e.description)}
                <div class="muscleImages">
                    <img class="musclesFront" style={{backgroundImage: front.map((muscle) => `url(https://wger.de/static/images/muscles/main/muscle-${muscle}.svg)`) + ", url(https://wger.de/static/images/muscles/muscular_system_front.svg)"}
                                                    } src={`https://wger.de/static/images/muscles/main/muscle-${e.muscles[0]}.svg`} />
                    <img class="musclesBack" style={{backgroundImage: back.map((muscle) => `url(https://wger.de/static/images/muscles/main/muscle-${muscle}.svg)`) + ", url(https://wger.de/static/images/muscles/muscular_system_back.svg)"}
                                                    } src={`https://wger.de/static/images/muscles/main/muscle-${e.muscles[0]}.svg`} />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleAddExx}>
                Add Exercise
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );

}
// component takes in handler function that handles where to add the exercise to
const CreateExercise = ({ workoutID, handleAddExercise, user }) => {
    let exercise = {};
    const [custom, setCustom] = useState(false);
    const [exxID, setExxID] = useState(objectID())

    
    const cacheTime = 10000;

    const cache = {

    }

    let cacheTimer = 0;

    const getCacheTimer = time => {
        const now = new Date().getTime();
        if(cacheTimer < now + time) {
            cacheTimer = now + time;
        }
        return cacheTimer;
    }

    const fetchWithCache = async (category,time) => {
        const now = new Date().getTime();
        if(!cache[category] || cache[category].cacheTimer < now){
            cache[category] = await fetchExerciseCategory(category);
            cache[category].cacheTimer = getCacheTimer(time);
        }
        return cache[category];
    }

    const fetchExerciseCategory = async category => {
        let categoryData = await fetch(`https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=${category}`)
            .then(data => data.json())
            .then(myJson => (categoryData = myJson));
        return categoryData;
    }
    

    const handleCreateExerciseObject = () => {
        setCustom(false);
        exercise.workout = workoutID;
        exercise._id = exxID;
        exercise.googleId = user.id;
        exercise.name = document.getElementById("exerciseName").value;
        exercise.description = document.getElementById("exerciseDescription").value;
        exercise.notes = document.getElementById("exerciseNotes").value;
        axios.post("/exercises", exercise)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        if(handleAddExercise)
            handleAddExercise(exercise);
    };

    return (
        <>
        <div id="selectExerciseCategory">
            <ExxCategory className="category" title={"Arms"} category={8} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <ExxCategory className="category" title={"Legs"} category={9} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <ExxCategory className="category" title={"Abs"} category={10} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <ExxCategory className="category" title={"Chest"} category={11} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <ExxCategory className="category" title={"Back"} category={12} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <ExxCategory className="category" title={"Shoulders"} category={13} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <ExxCategory className="category" title={"Calves"} category={14} user={user} workoutID={workoutID} handleAddExercise={handleAddExercise}/>
            <Button class="btn btn-success" onClick={() => setCustom(true)}>Custom</Button>
        </div>

        <div id="form">
            <br/>
            {custom && <><Form className="formBodyExercise">
                <Form.Group
                    className="mb-3"
                    controlId="formBasicExercise"
                    name="name"
                >
                    <Form.Label>Exercise Name</Form.Label>
                    <input
                        className="formInput"
                        type="text"
                        placeholder="Enter exercise"
                        id="exerciseName"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSets">
                    <Form.Label>Description</Form.Label>
                    <input type="textarea" className="formInput" placeholder="Description" id="exerciseDescription" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNotes">
                    <Form.Label>Notes</Form.Label>
                    <input
                        type="textarea"
                        className="formInput"
                        placeholder="Exercise Notes"
                        id="exerciseNotes"
                    />
                </Form.Group>
            </Form>
            <Button
                variant="primary"
                id="addExercise"
                type="button"
                onClick={handleCreateExerciseObject}
            >
                Add Exercise
            </Button></>}
        </div>
        </>
    );
};

export default CreateExercise;

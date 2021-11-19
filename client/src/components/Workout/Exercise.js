import React from "react";
import {useState} from "react";
import "./Exercise.css";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";


const ExerciseModalNoEdit = ({ show, handleClose, e}) => {
    return(
      
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="exerciseTitle">{e.name}</Modal.Title>
        </Modal.Header>
    <Modal.Body id="exerciseDesc">{ReactHtmlParser(e.notes)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    )
}

const ExerciseModal = ({ editExercises, show, handleClose, e}) => {
    const [update, setUpdate] = useState(false);

    const handleEditExercise = () => {
      setUpdate(true);

      let title = document.querySelector('#exerciseTitle');
      title.outerHTML = `<textarea id="updateTitle">` + title.innerHTML + '</textarea>';
      
      let desc = document.querySelector('#exerciseDesc');
      console.log(desc.innerHTML);
      desc.outerHTML = `<textarea id="updateDesc"}>` + desc.innerHTML+ '</textarea>';
    }

    async function updateWorkout() {
    
        let res = await axios.get("/workouts/" + e.googleId + '/' + e.workout)
            .catch((err) => console.log(err))
        let workout = res.data[0];
        let exerciseIndex = workout.exercises.findIndex((exx) => exx._id == e._id);
        workout.exercises[exerciseIndex].name = document.getElementById("updateTitle").value;
        workout.exercises[exerciseIndex].notes = document.getElementById("updateDesc").value;
        editExercises(workout.exercises);
        axios.post("/workouts/put/" + e.workout, {exercises: workout.exercises})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleSaveEdits = () => {
        if(e.workout){
            updateWorkout();
        }
      axios.post("/exercises/put/" + e._id, {name: document.getElementById("updateTitle").value, notes: document.getElementById("updateDesc").value}) 
        .then(res => console.log(res))
        .catch(err => console.log("/exercises/put/" + e._id + err))
    
        setUpdate(false);
      handleClose();
    }

    
    return(
      
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="exerciseTitle">{e.name}</Modal.Title>
        </Modal.Header>
    <Modal.Body id="exerciseDesc">{ReactHtmlParser(e.notes)}</Modal.Body>
        <Modal.Footer>
          {!update && <Button variant="primary" onClick={handleEditExercise}>Edit</Button>}
          {update && <Button variant="primary" onClick={handleSaveEdits}>Save</Button>}
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    )
}
// Component takes in an exercise object e and displays it.
const Exercise = ({ inSplit, removeExercise, editExercises, e }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleOpen = (event) => {
      event.preventDefault();
      
      setShow(true);
    }

    const handleDelete = () => {
        removeExercise(e);
    }

    return (
        <div id="exercise">
        <button className="exerciseBody" onClick={handleOpen}>
            <Card.Body>
              <Card.Title className="exerciseName">{e.name}</Card.Title>
              <button class="btn btn-danger btn-block" className="deleteExercise" onClick={handleDelete}>x</button>
            </Card.Body>
        </button>
        {!inSplit && <ExerciseModal id="exerciseModal" editExercises={editExercises} show={show} handleClose={handleClose} e={e}/>}
        {inSplit && <ExerciseModalNoEdit id="exerciseModal" editExercises={editExercises} show={show} handleClose={handleClose} e={e}/>}
        </div>
    );
};


export default Exercise;




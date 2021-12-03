import React from "react";
import {useState} from "react";
import "./Exercise.css";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";
import getUser from "../../utils/get-user"

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

const ExerciseModal = ({ setAddingExercises, addingExercises, editExercises, show, handleClose, e}) => {
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
        workout.exercises[exerciseIndex].description = document.getElementById("updateDesc").value;
        editExercises(workout.exercises);
        axios.post("/workouts/put/" + e.workout, {exercises: workout.exercises})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleSaveEdits = () => {
        
        if(addingExercises){
          console.log("ADDING");
          console.log(addingExercises);
          let newAddingExercises = addingExercises;
          let exerciseIndex = newAddingExercises.findIndex((exx) => exx._id == e._id);
          console.log("IND");
          console.log(exerciseIndex);
          newAddingExercises[exerciseIndex].name = document.getElementById("updateTitle").value;
          newAddingExercises[exerciseIndex].description = document.getElementById("updateDesc").value;
          console.log("NEW");
          console.log(newAddingExercises);
          setAddingExercises(newAddingExercises);
        }
        else{
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
    <Modal.Body id="exerciseDesc">{ReactHtmlParser(e.description)}</Modal.Body>
        <Modal.Footer>
          {!update && <Button variant="primary" onClick={handleEditExercise}>Edit</Button>}
          {update && <Button variant="primary" onClick={handleSaveEdits}>Save</Button>}
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      
    )
}

// Component takes in an exercise object e and displays it.
const Exercise = ({ setAddingExercises, addingExercises, inSplit, removeExercise, editExercises, e }) => {

    const actualUser = getUser()

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
              {
                e.googleId === actualUser.id ?
                <button class="btn btn-danger btn-block" className="deleteExercise" onClick={handleDelete}>x</button>
                :
                <div>
                </div>
              }
            </Card.Body>
        </button>
        {!inSplit && <ExerciseModal setAddingExercises={setAddingExercises} addingExercises={addingExercises} id="exerciseModal" editExercises={editExercises} show={show} handleClose={handleClose} e={e}/>}
        {inSplit && <ExerciseModalNoEdit id="exerciseModal" editExercises={editExercises} show={show} handleClose={handleClose} e={e}/>}
        </div>
    );
};


export default Exercise;




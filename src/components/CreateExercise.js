import React from 'react';
import {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// component takes in handler function that handles where to add the exercise to
const CreateExercise = ({handleAddExercise}) => {

    let exercise = {};
  
    const handleCreateExerciseObject = () => {
      exercise.name = document.getElementById("exerciseName").value;
      exercise.sets = document.getElementById("set").value;
      exercise.reps = document.getElementById("rep").value;
      exercise.weight = document.getElementById("weight").value;
      exercise.notes = document.getElementById("exerciseNotes").value;
      console.log(exercise);
      return(handleAddExercise(exercise))
      
    }
   return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicExercise">
            <Form.Label>Exercise Name</Form.Label>
            <Form.Control type="text" placeholder="Enter exercise" id="exerciseName"/>
        </Form.Group>
    

        <Form.Group className="mb-3" controlId="formBasicSets">
            <Form.Label>Sets</Form.Label>
            <Form.Control type="text" placeholder="Sets" id="set"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicReps">
            <Form.Label>Repetitions</Form.Label>
            <Form.Control type="text" placeholder="Repetitions" id="rep"/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="text" placeholder="Weight" id="weight"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} id="exerciseNotes"/>
        </Form.Group>
        <Button style={{marginLeft:"35%"}} variant="primary" id="addExercise" type="button" onClick={handleCreateExerciseObject}>
            Add Exercise
        </Button>
    </Form>
   )
  }

  export default CreateExercise;
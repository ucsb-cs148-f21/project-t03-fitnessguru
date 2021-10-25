import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';


function objectID() {
    const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    return(ObjectId);
}
// component takes in handler function that handles where to add the exercise to
const CreateExercise = ({workoutID, handleAddExercise, user}) => {

    let exercise = {};
  
    
    const handleCreateExerciseObject = () => {
      exercise.workout = workoutID;
      exercise._id = objectID();
      exercise.googleID = user.id;
      exercise.name = document.getElementById('exerciseName').value;
      exercise.sets = document.getElementById('sets').value;
      exercise.repetitions = document.getElementById('reps').value;
      exercise.weight = document.getElementById('weight').value;
      exercise.notes = document.getElementById('notes').value;
      axios.post('/exercises',exercise);
      return(handleAddExercise(exercise))
    }


   return (
    <Form className="formBodyExercise">        
        <Form.Group className="mb-3" controlId="formBasicExercise" name="name">
            <Form.Label>Exercise Name</Form.Label>
            <input type="text" placeholder="Enter exercise" id="exerciseName"/>
        </Form.Group>
    
        <Form.Group className="mb-3" controlId="formBasicSets">
            <Form.Label>Sets</Form.Label>
            <input type="number" placeholder="sets" id="sets"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReps">
            <Form.Label>Repetitions</Form.Label>
            <input type="number" placeholder="reps" id="reps"/>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicWeight">
            <Form.Label>Weight</Form.Label>
            <input type="number" placeholder="weight" id="weight"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNotes">
            <Form.Label>Notes</Form.Label>
            <input type="textarea" placeholder="Exercise Notes" id="notes"/>
        </Form.Group>
        <Button variant="primary" id="addExercise" type="button" onClick={handleCreateExerciseObject} >
            Add Exercise
        </Button>
    </Form>
   )
  }

  export default CreateExercise;
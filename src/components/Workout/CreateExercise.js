import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import "./CreateExercise.css";


function objectID() {
    const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    return(ObjectId);
}
// component takes in handler function that handles where to add the exercise to
<<<<<<< HEAD
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
      exercise.notes = document.getElementById('exerciseNotes').value;
      axios.post('/exercises',exercise);
      return(handleAddExercise(exercise))
    }


   return (
       <div id="form">
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
                <input type="textarea" placeholder="Exercise Notes" id="exerciseNotes"/>
            </Form.Group>
        
        </Form>
        <Button variant="primary" id="addExercise" type="button" onClick={handleCreateExerciseObject} >
            Add Exercise
        </Button>
    </div>
   )
  }
=======
const CreateExercise = ({ handleAddExercise }) => {
  let exercise = {};

  const handleCreateExerciseObject = () => {
    exercise.name = document.getElementById("exerciseName").value;
    exercise.sets = document.getElementById("set").value;
    exercise.reps = document.getElementById("rep").value;
    exercise.weight = document.getElementById("weight").value;
    exercise.notes = document.getElementById("exerciseNotes").value;
    console.log(exercise);
    return handleAddExercise(exercise);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicExercise">
        <Form.Label>Exercise Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter exercise"
          id="exerciseName"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSets">
        <Form.Label>Sets</Form.Label>
        <Form.Control type="text" placeholder="Sets" id="set" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicReps">
        <Form.Label>Repetitions</Form.Label>
        <Form.Control type="text" placeholder="Repetitions" id="rep" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" placeholder="Weight" id="weight" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNotes">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows={3} id="exerciseNotes" />
      </Form.Group>

      <Button
        style={{ marginLeft: "35%" }}
        variant="primary"
        id="addExercise"
        type="button"
        onClick={handleCreateExerciseObject}
      >
        Add Exercise
      </Button>
    </Form>
  );
};
>>>>>>> 76feff88ed0ec67c93d2e7d5a274059765dc1231

export default CreateExercise;

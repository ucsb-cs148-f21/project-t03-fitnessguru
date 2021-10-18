import React from 'react';
import {useState} from 'react';
import CreateExercise from './CreateExercise';
import ListExercises from './ListExercises';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './CreateWorkout.css';

const CreateWorkout = ({handleAddWorkout}) => {
    let workout = {};

    const [exercises, setExercises] = useState([]);
    const [showAddExercise, setShowAddExercise] = useState(false);
    const [showAddExercise1, setShowAddExercise1] = useState(true);
  
    const handleAddExercise = (exercise) => {
      const newExercises = exercises.concat(exercise);
      setExercises(newExercises);
      setShowAddExercise1(true);
      return(
        setShowAddExercise(false)
      )
    }

    const handleSetShowAddExercise = (e) => {
        e.preventDefault();
        setShowAddExercise1(false);
        return(setShowAddExercise(true));
    }

    const handleCreateWorkoutObject = () => {
        workout.workoutName = document.getElementById('workoutName').value;
        workout.exercises = exercises;
        return(
            handleAddWorkout(workout)
        )
    }

   return (
    <Form className="formBodyWorkout">
        <Form.Group className="mb-3" controlId="formBasicExercise">
            <Form.Label className="label">Workout Name</Form.Label>
            <Form.Control type="text" placeholder="Enter exercise" id="workoutName"/>
        </Form.Group>
        {showAddExercise && <CreateExercise handleAddExercise={handleAddExercise} />}<br /><br />
        <div className="addExercise">
            <div className="addButton">
            {showAddExercise1 && <Button className="addWorkout" onClick={handleSetShowAddExercise}>Add Exercise</Button>}
            </div>
        
            <div className="exerciseList">
                <ListExercises className="exercises" exercises={exercises}/>
            </div>
           
          
        </div>
        <Button variant="primary" id="addWorkout" type="button" onClick={handleCreateWorkoutObject} >
            Create Workout
        </Button>
    </Form>
   )
  }

  export default CreateWorkout;
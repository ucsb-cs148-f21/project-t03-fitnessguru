import React from 'react';
import {useState} from 'react';
import CreateExercise from './CreateExercise';
import ListExercises from './ListExercises';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './CreateWorkout.css';
import axios from 'axios';



function objectID() {
    const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    return(ObjectId);
}

const CreateWorkout = ({closeModal,splitID,handleAddWorkout, user}) => {
    let workout = {};

    const [exercises, setExercises] = useState([]);
    const [showAddExercise, setShowAddExercise] = useState(false);
    const [showAddExercise1, setShowAddExercise1] = useState(true);
    const [workoutID, setWorkoutID] = useState(objectID());
  
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
        workout.name = document.getElementById('workoutName').value;
        workout.exercises = exercises;
        workout._id = workoutID;
        workout.split = splitID;
        workout.googleId = user.id;
        axios.post('/workouts',workout);
        handleAddWorkout(workout)
        setExercises([]);
        return(
            closeModal()
        )
        
    }

   return (
    <Form className="formBodyWorkout">
        <Form.Group className="mb-3" controlId="formBasicExercise">
            <Form.Label className="label">Workout Name</Form.Label>
            <Form.Control type="text" placeholder="Enter workout" id="workoutName"/>
        </Form.Group>
        
        {showAddExercise && <CreateExercise workoutID={workoutID} handleAddExercise={handleAddExercise} user={user}/>}<br /><br />

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
    /*
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
    }


    <div class="form-group">
        <label for="notes">Notes</label>
        <input type="text" name="notes" class="form-control"/>
    </div>
   return (
    <Form action="/workouts" method="POST" className="formBodyWorkout">
        <Form.Group for="workouts" className="mb-3" controlId="formBasicWorkout">
            <Form.Label className="label">Workout Name</Form.Label>
            <Form.Control name="workouts" type="text" placeholder="Enter Workout" id="workoutName"/>
        </Form.Group>
        
        {showAddExercise && <CreateExercise setExercises={setExercises} user={user} />}<br /><br />

        <div className="addExercise">
            <div className="addButton">
            {showAddExercise1 && <Button className="addWorkout" onClick={handleSetShowAddExercise}>Add Exercise</Button>}
            </div>
        
            <div className="exerciseList">
                <ListExercises className="exercises" exercises={exercises}/>
            </div>
           
          
        </div>

        <Button variant="primary" id="addWorkout" type="button" onClick={handleCreateWorkoutObject} >
            Add Workout
        </Button>
    </Form>
   )*/
  }

  export default CreateWorkout;
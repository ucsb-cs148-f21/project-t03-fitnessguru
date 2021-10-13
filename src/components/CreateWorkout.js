import React from 'react';
import {useState} from 'react';
import CreateExercise from './CreateExercise';
import ListExercises from './ListExercises';

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

    return(
      <div>
        <form className="createWorkoutForm">
          <label htmlFor="workoutName">Workout name:</label><br></br>
          <input type="text" id="workoutName" name="workoutName" /><br></br>
          <ListExercises exercises={exercises}/>
          {showAddExercise1 && <button className="addExercise" onClick={handleSetShowAddExercise}>Add Exercise</button>}
          {showAddExercise && <CreateExercise handleAddExercise={handleAddExercise} />}<br /><br />
          <button id="addWorkout" type="button" onClick={handleCreateWorkoutObject}>Add Workout</button>
        </form>
      </div>
    )
  }

  export default CreateWorkout;
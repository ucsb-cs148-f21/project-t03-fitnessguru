import React from 'react';
import {useState} from 'react';

// component takes in handler function that handles where to add the exercise to
const CreateExercise = ({handleAddExercise}) => {

    let exercise = {};
  
    const handleCreateExerciseObject = () => {
      exercise.name = document.getElementById("exerciseName").value;
      exercise.sets = document.getElementById("set").value;
      exercise.reps = document.getElementById("rep").value;
      exercise.weight = document.getElementById("weight").value;
      exercise.notes = document.getElementById("notes").value;
      console.log(exercise);
      return(handleAddExercise(exercise))
      
    }

    return (
      <div>
        <form className="createExerciseForm">
          <label htmlFor="splitName">Exercise name:</label><br></br>
          <input type="text" id="exerciseName" name="exerciseName" /><br></br>
          <label htmlFor="sets">Sets:</label><br></br>
          <input type="number" id="set" name="set" /><br></br>
          <label htmlFor="reps">Reps:</label><br></br>
          <input type="number" id="rep" name="rep" /><br></br>
          <label htmlFor="weight">Weight:</label><br></br>
          <input nowrap type="number" id="weight" name="weight" /><br></br>
          <label htmlFor="reps">Notes:</label><br></br>
          <textarea htmlFor="notes" id="notes" name="notes"></textarea><br></br>
          <button id="addExercise" type="button" onClick={handleCreateExerciseObject}>Add Exercise</button>
        </form>
      </div>
    )
  }

  export default CreateExercise;
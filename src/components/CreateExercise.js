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
      exercise.notes = document.getElementById("exerciseNotes").value;
      console.log(exercise);
      return(handleAddExercise(exercise))
      
    }

    return (
      <div>
        <form className="createExerciseForm">
          <label htmlFor="splitName">Exercise name:</label><br />
          <input type="text" id="exerciseName" name="exerciseName" /><br />
          <label htmlFor="sets">Sets:</label><br />
          <input type="number" id="set" name="set" /><br /> 
          <label htmlFor="reps">Reps:</label><br />
          <input type="number" id="rep" name="rep" /><br />
          <label htmlFor="weight">Weight:</label><br />
          <input nowrap type="number" id="weight" name="weight" /><br />
          <label htmlFor="reps">Notes:</label><br />
          <textarea htmlFor="exerciseNotes" id="exerciseNotes" name="exerciseNotes"></textarea><br />
          <button id="addExercise" type="button" onClick={handleCreateExerciseObject}>Add Exercise</button>
        </form>
      </div>
    )
  }

  export default CreateExercise;
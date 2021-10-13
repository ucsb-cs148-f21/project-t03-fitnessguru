import React from 'react';
import {useState} from 'react';
import './Exercise.css';

// Component takes in an exercise object e and displays it.
const Exercise = ({e}) => {
    console.log(e);
    return (
      <div className="exerciseBody">
        <h3 className="exerciseName">{e.name}</h3>
        <p className="exerciseStats">Sets: {e.sets}</p>
        <p className="exerciseStats">Reps: {e.reps}</p>
        <p className="exerciseStats">Weight: {e.weight}</p>
        <p className="exerciseNotes">Notes: {e.notes}</p>
      </div>
    )
  }

export default Exercise;


import React from 'react';
import {useState} from 'react';

// Component takes in an exercise object e and displays it.
const Exercise = ({e}) => {
    return (
      <div>
        <h2>{e.name}</h2>
        <p>Reps: {e.reps}</p>
        <p>Sets: {e.sets}</p>
        <p>Weight: {e.weight}</p>
        <p>Notes: {e.notes}</p>
      </div>
    )
  }

export default Exercise;


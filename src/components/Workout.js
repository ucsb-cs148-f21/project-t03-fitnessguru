import React from 'react';
import {useState} from 'react';
import Exercise from './Exercise';


const Workout = ({w}) => {
    console.log("hi")
    console.log(w);
    return (
      <div>
        <h1>{w.workoutName}</h1>
        {w.exercises.map((item)=>{
           return <Exercise e={item} />
       })}
      </div>
    )
}

export default Workout;
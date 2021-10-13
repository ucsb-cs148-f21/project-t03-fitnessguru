import React from 'react';
import {useState} from 'react';
import Exercise from './Exercise';
import './Workout.css'


const Workout = ({w}) => {
    console.log("hi")
    console.log(w);
    return (
      <div className="workoutBody">
        <h2 className="workoutName">{w.workoutName}</h2>
        {w.exercises.map((item)=>{
           return <Exercise e={item} />
       })}
      </div>
    )
}

export default Workout;
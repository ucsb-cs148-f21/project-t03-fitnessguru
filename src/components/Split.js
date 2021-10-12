import React from 'react';
import {useState} from 'react';
import Workout from './Workout'


const Split = ({s}) => {
    return (
      <div>
        <h1>{s.name}</h1>
        <p>{s.notes}</p>
        {s.workouts.map((w)=>{
           return <Workout w={w} />
       })}
      </div>
    )
}

export default Split;
import React from 'react';
import {useState} from 'react';
import Workout from './Workout'
import './Split.css'


const Split = ({s}) => {
    return (
      <div className="splitBody">
          <div className="description">
            <h1 className="splitName">{s.name}</h1>
            <p className="splitNotes">{s.notes}</p>
          </div>
        
        <div className="workoutList">
            {s.workouts.map((w)=>{
            return <Workout w={w} />
        })}
        </div>
      </div>
    )
}

export default Split;
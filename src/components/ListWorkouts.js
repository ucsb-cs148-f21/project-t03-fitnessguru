import React from 'react';
import {useState} from 'react';
import Workout from './Workout';
import "./ListWorkouts.css";

const ListWorkouts = ({workouts}) => {
    return(
        <div className="workoutList">
            <h3 id="label">Workouts: </h3>
            <div className="workouts">
                {workouts.map((w)=>{
                    return <Workout className="w" w={w} />
                })}
            </div>
            
        </div>
    )
}

export default ListWorkouts;
import React from 'react';
import {useState} from 'react';
import Workout from './Workout';
import "./ListWorkouts.css";

const WorkoutList = ({workouts}) => {
    return (
        <div className="workoutList">
            <div className="workouts">
                {workouts.map((w)=>{
                    return <Workout className="w" w={w} />
                })}
            </div>
            
        </div>
    )
}

const ListWorkouts = ({workouts}) => {
    const isEmpty = (workouts.length < 1);
    return(
        <>
            {!isEmpty && <WorkoutList workouts={workouts}/>}
        </>
    )
}

export default ListWorkouts;
import React from 'react';
import {useState} from 'react';
import Workout from './Workout';

const ListWorkouts = ({workouts}) => {
    return(
        <div id="workoutList">
            {workouts.map((w)=>{
                return <Workout w={w} />
            })}
        </div>
    )
}

export default ListWorkouts;
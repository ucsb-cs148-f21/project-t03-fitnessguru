import React from 'react';
import {useState} from 'react';
import Exercise from './Exercise'
import "./ListExercises.css";

const ListExercises = ({exercises}) => {
    return (
        <div className="exercisesBody">
            <h3 id="exercisesList">Exercises</h3>
            {exercises.map((item)=>{
                return <Exercise e={item} />
            })}
        </div>
    )
}

export default ListExercises;
import React from "react";
import {useState, useEffect} from "react";
import Workout from "./Workout";
import "./ListWorkouts.css";

const ListWorkouts = ({ workouts }) => {
  return (
    <div id="workoutList">
      {workouts.map((workout=>{
        return <Workout className="workout" w={workout} />
      }))}
    </div>
  )

};

export default ListWorkouts;
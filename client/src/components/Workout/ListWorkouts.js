import React from "react";
import {useState, useEffect} from "react";
import Workout from "./Workout";
import "./ListWorkouts.css";

const ListWorkouts = ({ setWorkouts, workouts, user }) => {
  return (
    <div id="workoutList">
      {workouts.map((workout=>{
        return <Workout user={user} workouts={workouts} setWorkouts={setWorkouts} className="workout" w={workout} />
      }))}
    </div>
  )

};

export default ListWorkouts;
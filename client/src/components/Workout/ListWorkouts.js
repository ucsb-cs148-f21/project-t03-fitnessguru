import React from "react";
import {useState, useEffect} from "react";
import Workout from "./Workout";
import "./ListWorkouts.css";
import compare from "../../utils/compare"

const ListWorkouts = ({ setWorkouts, workouts, user }) => {

  workouts.sort(compare)

  return (
    <div id="workoutList">
      {workouts.map((workout=>{
        return <Workout user={user} workouts={workouts} setWorkouts={setWorkouts} className="workout" w={workout} />
      }))}
    </div>
  )

};

export default ListWorkouts;
import React from "react";
import {useState, useEffect} from "react";
import Workout from "./Workout";
import "./ListWorkouts.css";

const ListWorkouts = ({ setWorkouts, workouts, user }) => {

  function compare(a, b){
    const aName = a.name.toUpperCase()
    const bName = b.name.toUpperCase()
    if(aName < bName){
        return -1
    }else if(aName > bName){
        return 1
    }else{
        return 0
    }
  }

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
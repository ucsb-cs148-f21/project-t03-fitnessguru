import React from "react";
import {useState, useEffect} from "react";
import Workout from "./Workout";
import "./ListWorkouts.css";

const ListWorkouts = ({ user }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`/workouts/${user.id}`)
    .then(res => res.json())
    .then(workouts => setWorkouts(workouts))
  }, [user.id])

  return (
    <div id="workoutList">
      {workouts.map((workout=>{
        return <Workout className="workout" w={workout} />
      }))}
    </div>
  )

};

export default ListWorkouts;
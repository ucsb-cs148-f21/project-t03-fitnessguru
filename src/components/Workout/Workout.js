import React from "react";
import Exercise from "./Exercise";
import "./Workout.css";
import Card from "react-bootstrap/Container";

const Workout = ({w}) => {
    return (
        <Card className="workoutBody" style={{ width: '18rem' }}>
          <div id="workoutHead">
            <h2 className="workoutName">{w.name}</h2>
            <form action={"/workouts/delete/" + w._id} method="POST" class="mb-4">
              <input id="delete" type="submit" value="Delete" class="btn btn-danger"/>
            </form>
          </div>
            
            {w.exercises.map((item)=>{
                return <Exercise e={item} />
            })}
        </Card>
    )
}

export default Workout;
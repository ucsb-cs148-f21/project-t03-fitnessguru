import React from "react";
import Exercise from "./Exercise";
import "./Workout.css";
import Card from "react-bootstrap/Container";

const Workout = ({ w }) => {
  console.log("hi");
  console.log(w);

  return (
    <Card className="workoutBody" style={{ width: "18rem" }}>
      <h2 className="workoutName">{w.workoutName}</h2>
      {w.exercises.map((item) => {
        return <Exercise e={item} />;
      })}
    </Card>
  );
};

export default Workout;

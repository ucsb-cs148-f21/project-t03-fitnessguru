import React from "react";
import Exercise from "./Exercise";
import "./ListExercises.css";

const ListExercises = ({ exercises }) => {
  return (
    <div className="exercisesBody">
      {exercises.map((item) => {
        return <Exercise e={item} />;
      })}
    </div>
  );
};

export default ListExercises;

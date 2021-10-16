import React from 'react';
import {useState} from 'react';
import './Exercise.css';
import Card from "react-bootstrap/Card";

// Component takes in an exercise object e and displays it.
const Exercise = ({e}) => {
    console.log(e);
    return (
        
        <Card.Body className="exerciseBody">
            <Card.Title className="exerciseName">{e.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{e.sets} sets x {e.reps} reps of {e.weight}lbs</Card.Subtitle>
            <Card.Text>
                {e.notes}
            </Card.Text>
        </Card.Body>
    )
  }

export default Exercise;


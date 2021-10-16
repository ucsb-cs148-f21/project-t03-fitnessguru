import React from 'react';
import {useState} from 'react';
import Workout from './Workout'
import './Split.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Nav } from 'react-bootstrap';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";


const popover = (w) => (
    <Popover id="popover-basic">
      <Workout w={w} />
    </Popover>
);

const Split = ({s}) => {
    return (
    
        <Card className="splitCard"style={{ width: '18rem' }}>
            <Card.Header className="splitName">{s.name}</Card.Header>
            <ListGroup className="workoutCards" variant="flush">
                    {s.workouts.map((w)=>{
                    return (
                    <OverlayTrigger className="overlay" trigger="click" placement="right" overlay={popover(w)}>
                        <Button className="showWorkout" variant="success">{w.workoutName}</Button>
                    </OverlayTrigger>
                    )
                })}
            </ListGroup>
        </Card>
    )
}

export default Split;
import React from 'react'
import {useState} from 'react'
import CreateWorkout from './CreateWorkout'
import ListWorkouts from './ListWorkouts';
import './CreateSplit.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateSplit = ({handleAddSplit}) => {
    let split = {};
    const [workouts, setWorkouts] = useState([]);
    const [showAddWorkout, setShowAddWorkout] = useState(false);
    const [showAddWorkout1, setShowAddWorkout1] = useState(true);

    const handleSetShowAddWorkout = (e) => {
        e.preventDefault();
        setShowAddWorkout1(false);
        return(setShowAddWorkout(true));
    }

    const handleAddWorkout = (workout) => {
        const newWorkouts = workouts.concat(workout);
        setWorkouts(newWorkouts);
        setShowAddWorkout1(true);
        return(
            setShowAddWorkout(false)
        )
    }

    const handleNoWorkoutAdded = () => {
        return(setShowAddWorkout1)
    }

    const handleCreateSplitObject = () => {
        split.name = document.getElementById("splitName").value;
        split.notes = document.getElementById("notes").value;
        split.workouts = workouts;
        return(handleAddSplit(split));
    }

    return (
        <Form className="splitForm">
            <Form.Group className="mb-3" controlId="formBasicExercise">
                <Form.Label className="label">Split Name</Form.Label>
                <Form.Control type="text" placeholder="Enter split name" id="splitName"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNotes">
                <Form.Label className="label">Notes</Form.Label>
                <Form.Control as="textarea" rows={3} id="notes"/>
            </Form.Group>

            <div className="showWorkouts">
                <div className="addingWorkout">
                    {showAddWorkout1 && <Button className="addWorkout" onClick={handleSetShowAddWorkout}>Add Workout</Button>}<br />
                    <div className="workoutList">
                        <ListWorkouts workouts={workouts} />
                    </div>
                </div>
                
                {showAddWorkout && <CreateWorkout handleAddWorkout={handleAddWorkout}/>}
            </div>

            <Button variant="primary" id="addSplit" type="button" onClick={handleCreateSplitObject} >
                Create Split
            </Button>
        </Form>
    )
}

export default CreateSplit
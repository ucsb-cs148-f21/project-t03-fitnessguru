import React from "react";
import { useState } from "react";
import CreateExercise from "./CreateExercise";
import ListExercises from "./ListExercises";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CreateWorkout.css";
import axios from "axios";

function objectID() {
    const ObjectId = (
        m = Math,
        d = Date,
        h = 16,
        s = (s) => m.floor(s).toString(h),
    ) =>
        s(d.now() / 1000) +
        " ".repeat(h).replace(/./g, () => s(m.random() * h));
    return ObjectId;
}

const CreateWorkout = ({ closeModal, splitID, handleAddWorkout, user }) => {
    let workout = {};

    const [exercises, setExercises] = useState([]);
    const [showAddExercise, setShowAddExercise] = useState(false);
    const [showAddExercise1, setShowAddExercise1] = useState(true);
    const [workoutID, setWorkoutID] = useState(objectID());

    const handleAddExercise = (exercise) => {
        const newExercises = exercises.concat(exercise);
        setExercises(newExercises);
        setShowAddExercise1(true);
        return setShowAddExercise(false);
    };

    const handleSetShowAddExercise = (e) => {
        e.preventDefault();
        setShowAddExercise1(false);
        return setShowAddExercise(true);
    };

    const handleClose = () => {
        document.getElementById("workoutName").value = "";
        setShowAddExercise1(true);
        setShowAddExercise(false);
        closeModal();
    };

    const handleCreateWorkoutObject = () => {
        workout.name = document.getElementById("workoutName").value;
        workout.exercises = exercises;
        workout._id = workoutID;
        workout.split = splitID;
        workout.googleId = user.id;
        axios.post("/workouts", workout);
        handleAddWorkout(workout);
        setExercises([]);
        document.getElementById("workoutName").value = "";
        setShowAddExercise1(true);
        setShowAddExercise(false);
        return closeModal();
    };

    return (
        <Form className="formBodyWorkout">
            <Button
                style={{ position: "relative", left: "460px", top: "-10px" }}
                variant="close"
                id="closeWorkoutModal"
                type="button"
                onClick={handleClose}
            ></Button>
            <Form.Group className="mb-3" controlId="formBasicExercise">
                <Form.Label className="label">Workout Name</Form.Label>
                <input
                    type="text"
                    placeholder="Enter workout"
                    id="workoutName"
                />
            </Form.Group>

            {showAddExercise && (
                <CreateExercise
                    workoutID={workoutID}
                    handleAddExercise={handleAddExercise}
                    user={user}
                />
            )}
            <br />
            <br />

            <div className="addExercise">
                <div className="addButton">
                    {showAddExercise1 && (
                        <Button
                            className="addWorkout"
                            onClick={handleSetShowAddExercise}
                        >
                            Add Exercise
                        </Button>
                    )}
                </div>

                <div className="exerciseList">
                    <ListExercises
                        className="exercises"
                        exercises={exercises}
                    />
                </div>
            </div>

            <Button
                variant="primary"
                id="addWorkout"
                type="button"
                onClick={handleCreateWorkoutObject}
            >
                Create Workout
            </Button>
        </Form>
    );
};

export default CreateWorkout;

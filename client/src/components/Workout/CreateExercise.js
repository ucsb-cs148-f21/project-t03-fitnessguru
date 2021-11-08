import React from "react";
import {useState} from "react";
import $ from "jquery";
import 'bootstrap';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Exercise from "./Exercise";
import ReactHtmlParser from 'react-html-parser';
import "./CreateExercise.css";

const Exx = ({ e}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {e.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{e.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ReactHtmlParser(e.description)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
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
// component takes in handler function that handles where to add the exercise to
const CreateExercise = ({ workoutID, handleAddExercise, user }) => {
    let exercise = {};
    const [exercises, setExercises] = useState();

    const handleCreateExerciseObject = () => {
        exercise.workout = workoutID;
        exercise._id = objectID();
        exercise.googleID = user.id;
        exercise.name = document.getElementById("exerciseName").value;
        exercise.sets = document.getElementById("sets").value;
        exercise.repetitions = document.getElementById("reps").value;
        exercise.weight = document.getElementById("weight").value;
        exercise.notes = document.getElementById("exerciseNotes").value;
        axios.post("/exercises", exercise);
        return handleAddExercise(exercise);
    };

    const handleGetExercises = (category) => {
        axios.get(`https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=${category}`)
            .then((res) => setExercises(res.data.results))
            //.then(() => setLoading(false))
            .catch((error) => console.log(error))
    }

    const handleClose = () => {
        $('.modal').hide();
        $('.modal-backdrop').hide();
    }

    return (
        <>
        <div id="selectExerciseCategory">
            <button onClick={() => handleGetExercises(8)}>Arms</button>
            <button onClick={() => handleGetExercises(9)}>Legs</button>
            <button onClick={() => handleGetExercises(10)}>Abs</button>
            <button onClick={() => handleGetExercises(11)}>Chest</button>
            <button onClick={() => handleGetExercises(12)}>Back</button>
            <button onClick={() => handleGetExercises(13)}>Shoulders</button>
            <button onClick={() => handleGetExercises(14)}>Calves</button>

    {exercises && <ul id="exerciseOptions">{exercises.map(exercise => <li><Exx e={exercise}/></li>)}</ul>}
        </div>
        <div id="form">
            <Form className="formBodyExercise">
                <Form.Group
                    className="mb-3"
                    controlId="formBasicExercise"
                    name="name"
                >
                    <Form.Label>Exercise Name</Form.Label>
                    <input
                        type="text"
                        placeholder="Enter exercise"
                        id="exerciseName"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSets">
                    <Form.Label>Sets</Form.Label>
                    <input type="number" placeholder="sets" id="sets" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicReps">
                    <Form.Label>Repetitions</Form.Label>
                    <input type="number" placeholder="reps" id="reps" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicWeight">
                    <Form.Label>Weight</Form.Label>
                    <input type="number" placeholder="weight" id="weight" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNotes">
                    <Form.Label>Notes</Form.Label>
                    <input
                        type="textarea"
                        placeholder="Exercise Notes"
                        id="exerciseNotes"
                    />
                </Form.Group>
            </Form>
            <Button
                variant="primary"
                id="addExercise"
                type="button"
                onClick={handleCreateExerciseObject}
            >
                Add Exercise
            </Button>
        </div>
        </>
    );
};

export default CreateExercise;

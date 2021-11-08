import React from "react";
import {useState} from "react";
import "./Exercise.css";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactHtmlParser from 'react-html-parser';

const ExerciseModal = ({show, handleOpen, handleClose, e}) => {
    return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{e.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ReactHtmlParser(e.description)}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
// Component takes in an exercise object e and displays it.
const Exercise = ({ e }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
        <button className="exerciseBody" onClick={handleOpen}>
            <Card.Body>
            <Card.Title className="exerciseName">{e.name}</Card.Title>
            {/*<Card.Subtitle style={{ color: "#80D6F0" }} className="setsReps">
                {e.sets} sets x {e.reps} reps of {e.weight}lbs
    </Card.Subtitle>*/}
        </Card.Body>
        </button>
        <ExerciseModal show={show} handleOpen={handleOpen} handleClose={handleClose} e={e}/>
        </>
    );
};

export default Exercise;

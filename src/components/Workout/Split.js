import React from "react";
import { useState } from "react";
import "./Split.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Exercise from "./Exercise";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.w.workoutName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="workoutGrid">
        {props.w.exercises.map((item) => {
          return <Exercise e={item} />;
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Split = ({ s }) => {
  const [modalShow, setModalShow] = useState(false);
  const [workout, setWorkout] = useState({
    workoutName: "test",
    exercises: [],
  });

  const handleShowWorkout = ({ w }) => {
    console.log("WOKROUT: ");
    console.log(workout);
    setWorkout(w);
    return setModalShow(true);
  };

  return (
    <>
      <Card className="splitCard" style={{ width: "18rem" }}>
        <Card.Header className="splitName">{s.name}</Card.Header>

        <ListGroup className="workoutCards" variant="flush">
          {s.workouts.map((w) => {
            return (
              <Button
                variant="primary"
                onClick={() => handleShowWorkout({ w })}
              >
                {w.workoutName}
              </Button>
            );
          })}
        </ListGroup>
      </Card>

      <MyVerticallyCenteredModal
        w={workout}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Split;

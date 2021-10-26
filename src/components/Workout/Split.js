<<<<<<< HEAD
import React from 'react';
import {useState, useEffect} from 'react';
import './Split.css'
=======
import React from "react";
import { useState } from "react";
import "./Split.css";
>>>>>>> 76feff88ed0ec67c93d2e7d5a274059765dc1231
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Exercise from "./Exercise";

function MyVerticallyCenteredModal(props) {
<<<<<<< HEAD
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.w.name}
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body className="workoutGrid">
            {props.w.exercises.map((item)=>{
                return <Exercise e={item} />
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Split = ({split, user}) => {
    const [modalShow, setModalShow] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const [selectedWorkout, setSelectedWorkout] = useState({workoutName:'', exercises:[]})

    useEffect(() => {
      fetch(`/workouts/${user.id}`)
      .then(res => res.json())
      .then(workouts => setWorkouts(workouts.filter(w => w.split == split)))
    }, [user.id])

    const handleShowWorkout = ({w}) => {
        setSelectedWorkout(w);
        return (
            setModalShow(true)
        )
    }
    
    return (
        <div className="splitItem">
            <Card id="splitCard"style={{ width: '18rem' }}>
                <Card.Header id="splitName">
                  <div className="card-top">
                    <div>
                    <div id="title">{split.name}</div>
                    
                    </div>
                
                  <form action={"/splits/delete/" + split._id} method="POST" class="mb-4">
                    <input id="delete" type="submit" value="Delete" class="btn btn-danger"/>
                  </form>
                  {/*}
                  <button id="update" type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#updateSplit">
                    Update
    </button>*/}
               
                </div>
                <div id="notes">{split.notes}</div>

                <div class="modal fade" id="updateSplit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Update Split</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <form action={"/splits/put/" + split._id} method="POST" class="mb-4">
                              <div class="modal-body"> 
                        
            
                                  <br/>
                                  <div class="form-group">
                                      <label for="notes">Notes</label>
                                      <input type="text" name="notes" defaultValue={split.notes} class="form-control"/>
                                  </div>
                                  <br/>
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                  <input type="submit" value="Update Exercise" class="btn btn-primary btn-block"/>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
                </Card.Header>
                
                <ListGroup id="workoutCards" variant="flush">
                        {split.workouts.map((w)=>{
                        return (
                            <Button variant="primary" onClick={() => handleShowWorkout({w})}>
                                {w.name}
                            </Button>
                        )
                    })}
                </ListGroup>
            </Card>

            <MyVerticallyCenteredModal
                w={selectedWorkout}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}
=======
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
>>>>>>> 76feff88ed0ec67c93d2e7d5a274059765dc1231

export default Split;

import React from 'react';
import {useState, useEffect} from 'react';
import './Split.css'
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
                  <div id="title">{split.name}</div>
                  <div id="notes">{split.notes}</div>
                  {/*}
                  <button id="delete" onClick={() => handleDeleteSplit(s)}>
                    <img src="https://api.iconify.design/bx:bx-trash.svg?height=24" aria-hidden="true" />
    </button> */}
                <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#updateSplit">
                  Update
                </button>

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

export default Split;

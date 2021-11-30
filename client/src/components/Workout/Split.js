import React from "react";
import { useState, useEffect } from "react";
import "./Split.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Exercise from "./Exercise";
import Workout from "./Workout";

function MyVerticallyCenteredModal(props) {
    const [workouts, setWorkouts] = useState(props.split.workouts)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
        <Workout inSplit={1} workouts={workouts} setWorkouts={setWorkouts} id="displayedWorkout" w={props.w} user={props.user} />
        
            
        </Modal>
    );
}

const Split = ({ split, user }) => {
    const [modalShow, setModalShow] = useState(false);
    const [workouts, setWorkouts] = useState([]);
    const [selectedWorkout, setSelectedWorkout] = useState({
        workoutName: "",
        exercises: [],
    });

    useEffect(() => {
        fetch(`/workouts/${user.id}`)
            .then((res) => res.json())
            .then((workouts) =>
                setWorkouts(workouts.filter((w) => w.split == split)),
            );
    }, [user.id]);

    const handleShowWorkout = ({ w }) => {
        setSelectedWorkout(w);
        return setModalShow(true);
    };

    return (
        <div className="splitItem">
            <Card id="splitCard" style={{ width: "20rem" }}>
                <Card.Header id="splitName">
                    <div className="card-top">
                        <div id="top">
                        <div>
                            <div id="title">
                                {
                                split.public === "true" ?
                                split.name + " (Public)" :
                                split.name + " (Private)"
                                }</div>
                        </div>

                        <div>
                            <button
                                type="button"
                                class="btn btn-primary btn-block"
                                data-toggle="modal"
                                data-target={
                                    "#updateSplit" + split._id
                                }
                            >
                                Update
                            </button>
                        </div>
                        
                        <div>
                        <form
                            action={"/splits/delete/" + split._id}
                            method="POST"
                            class="mb-4"
                        >
                            <input
                                id="deleteSplit"
                                type="submit"
                                value="Delete"
                                class="btn btn-danger"
                            />
                        </form>
                        <form
                            action={"/splits/public/" + split._id}
                            method="POST"
                            class="mb-4"
                        >
                            <input
                                id="publicSplit"
                                type="submit"
                                value="Public"
                                class="btn btn-primary btn-block"
                            />
                        </form>
                        </div>
                    </div>
                </div>
                    <div id="notes">{split.notes}</div>

                    <div
                        class="modal fade"
                        id={"updateSplit" + split._id}
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Update {split.name}
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form
                                    action={"/splits/put/" + split._id}
                                    method="POST"
                                    class="mb-4"
                                >
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="notes">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                defaultValue={split.name}
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="notes">Notes</label>
                                            <input
                                                type="text"
                                                name="notes"
                                                defaultValue={split.notes}
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <input
                                            type="submit"
                                            value="Update Split"
                                            class="btn btn-primary btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Card.Header>

                <ListGroup id="workoutCards" variant="flush">
                    {split.workouts.map((w) => {
                        return (
                            <Button
                                variant="primary"
                                onClick={() => handleShowWorkout({ w })}
                            >
                                {w.name}
                            </Button>
                        );
                    })}
                </ListGroup>
            </Card>

            <MyVerticallyCenteredModal
                id="workoutModal"
                w={selectedWorkout}
                show={modalShow}
                split={split}
                onHide={() => setModalShow(false)}
                user={user}
            />
        </div>
    );
};

export default Split;

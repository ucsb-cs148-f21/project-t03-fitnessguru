import React from "react";
import { useState, useEffect } from "react";
import "./Split.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Exercise from "./Exercise";
import Workout from "./Workout";
import getUser from "../../utils/get-user"

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

    const currentUser = getUser()

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
                            <div id="title">{split.name}</div>
                        </div>
                        
                        <div>
                        <form
                            action={"/splits/public/" + currentUser.id + "/split/" + split._id}
                            method="POST"
                            class="mb-4"
                        >
                            <input
                                id="copySplit"
                                type="submit"
                                value="Copy"
                                class="btn btn-primary btn-block"
                            />
                        </form>
                        </div>
                    </div>
                </div>
                    <div id="notes">{split.notes}</div>
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

import React from "react";
import {useState} from "react";
import $ from "jquery";
import 'bootstrap';
import Container from "react-bootstrap/Container";
import axios from 'axios';

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import ListSplits from "../components/Workout/ListSplits"
import CreateWorkout from "../components/Workout/CreateWorkout"
import objectID from "../utils/objectID";
import ListWorkouts from "../components/Workout/ListWorkouts";

const closeWorkoutModal = () => {
    $('#createWorkout').hide();
    $('#addSplit').show();
}

const openWorkoutModal= () => {
    $('#createWorkout').show();
    $('#addSplit').hide();
}

const closeSplitModal = () => {
    $('#addSplit').hide();
    $('.modal-backdrop').remove()
}

const openSplitModal = () => {
    $('#addSplit').show();
}

export default function MySplits(){
    let split={};
    const user = getUser();
    const [workouts,setWorkouts] = useState([]);
    const [splitID,setSplitID] = useState(objectID());

    const handleAddWorkout = (workout) => {
        const newWorkouts = workouts.concat(workout);
        setWorkouts(newWorkouts);
    }

    const handleAddSplit = () => {
        split.name = document.getElementById('name').value;
        split.notes = document.getElementById('notes').value;
        split.workouts = workouts;
        split._id = splitID;
        split.googleId = user.id;
        axios.post('/splits',split)
            .then(response => window.location.reload())
            .catch(error => "Couldn't post split");
        closeSplitModal();
    }

    return(
        <Layout user={user}>
            <Container>
                <button type="button" class="btn btn-primary btn-block" onClick={() => openSplitModal()}>
                    Add Split
                </button>
                <br/>
                <ListSplits user={user}/>

                <div class="modal" id="addSplit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Split</h5>
                                <button type="button" class="close" onClick={() => closeSplitModal()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="mb-4">
                                <div class="modal-body" style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
                                    <div class="form-group">
                                        <input type="hidden" name="googleId" value={user.id} class="form-control"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="split">Split</label>
                                        <input type="text" id="name" name="name" class="form-control"/>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <button type="button" class="btn btn-secondary" onClick={() => openWorkoutModal()}>
                                            Add Workout
                                        </button>
                                    </div>
                                    <br/>
                                    <div class="form-group">
                                        <label for="notes">Notes</label>
                                        <input type="text" id="notes" name="notes" class="form-control"/>
                                    </div>
                                    <br/>
                                </div>
                                <div>
                                <ListWorkouts workouts={workouts}/>
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-secondary" onClick={() => handleAddSplit()}>Save Split</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="modal" id="createWorkout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <CreateWorkout closeModal={closeWorkoutModal} splitID={splitID} handleAddWorkout={handleAddWorkout} user={user}/>
                    <button type="button" id="closeWorkoutModal" style={{position:"relative", top:"170px", left:"950px"}}class="btn btn-secondary" onClick={() => closeWorkoutModal()}>Close</button>
            
                </div>
            </Container>
            
        </Layout>
    )
}
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
import CreateSplit from "../components/Workout/CreateSplit";
import Modal from "react-bootstrap/Modal";



export default function MySplits(){
    const user = getUser();
    const [workouts,setWorkouts] = useState([]);
    const [splitID,setSplitID] = useState(objectID());
    const [showCreateSplit, setShowCreateSplit] = useState(false);
    const [showAddSplit, setShowAddSplit] = useState(true);
    const handleAddWorkout = (workout) => {
        const newWorkouts = workouts.concat(workout);
        setWorkouts(newWorkouts);
    }

    const closeWorkoutModal = () => {
        $('#createWorkout').hide();
        $('#createSplit').show();

    }
    
    const openWorkoutModal= () => {
        $('#createWorkout').show();
        $('#addSplit').hide();
    }
    
    const closeSplitModal = () => {
        setShowCreateSplit(false);
        setShowAddSplit(true);
    }
    
    const openSplitModal = () => {
        $('#addSplit').show();
        

    }

    const handleShowCreateSplit = () => {
        setShowCreateSplit(true);
        setShowAddSplit(false);
    }

    const handleAddSplit = (split) => {
        axios.post('/splits',split)
            .then(window.location.reload())
            .catch(console.log("Couldn't post split"));
   }

    return(
        <Layout user={user}>
            <Container>
                {showAddSplit && <button type="button" class="btn btn-primary btn-block" onClick={handleShowCreateSplit}>
                    Add Split
                </button>}
                <ListSplits user={user} />
                {showCreateSplit && <CreateSplit handleAddSplit={handleAddSplit} closePrompt={closeSplitModal} user={user} id={"createSplit"}/>}
                <div class="modal" id="createWorkout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <CreateWorkout closeModal={closeWorkoutModal} splitID={splitID} handleAddWorkout={handleAddWorkout} user={user}/>
                </div>
            </Container>
            
        </Layout>
    )
}
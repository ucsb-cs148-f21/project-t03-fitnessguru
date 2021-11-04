import React from "react";
import {useState} from "react";
import $ from "jquery";
import 'bootstrap';
import Container from "react-bootstrap/Container";
import axios from 'axios';

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import CreateWorkout from "../components/Workout/CreateWorkout";
import ListWorkouts from "../components/Workout/ListWorkouts";

export default function MyWorkouts() {
  const user = getUser();
  const [showAddWorkout, setShowAddWorkout] = useState(true);

  const closeWorkoutModal = () => {
    $('#createWorkout').hide();
  }

  const handleShowCreateWorkout = () => {
    setShowAddWorkout(false);
    $('#createWorkout').show();
  }


  return (
    <Layout user={user}>
      <Container>
        {showAddWorkout && <button type="button" class="btn btn-primary btn-block" onClick={handleShowCreateWorkout}>
          Add Workout
          </button>}

          <div class="modal" id="createWorkout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <CreateWorkout closeModal={closeWorkoutModal} splitID={null} user={user}/>
          </div> <br/>
          <h2>My Workouts</h2>
          <ListWorkouts user={user} />
      </Container>
    </Layout>
  );
}
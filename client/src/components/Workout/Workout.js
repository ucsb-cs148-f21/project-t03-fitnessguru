import React from "react";
import {useState} from "react";
import Exercise from "./Exercise";
import "./Workout.css";
import Card from "react-bootstrap/Container";
import ListExercises from "./ListExercises";
import CreateExercise from "./CreateExercise";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"


$('body').on('click', '[data-editable]', function(){
  
    var $el = $(this);
                
    var $input = $('<input/>').val( $el.text() );
    $el.replaceWith( $input );
    
    var save = function(){
      var $p = $('<p data-editable />').text( $input.val() );
      $input.replaceWith( $p );
    };

    $input.one('blur', save).focus();
    
});

const Workout = ({workouts, setWorkouts, w, user}) => {

    const [exercises, setExercises] = useState(w.exercises);
    const [showCreateExercise, setShowCreateExercise] = useState(false);

    const editExercises = (newExercises) => {
        console.log("before");
        console.log(w.exercises);
        setExercises(newExercises);
        console.log(exercises);
        let workoutIndex = workouts.findIndex((workout) => workout._id == w._id);
        let newWorkouts = workouts;
        newWorkouts[workoutIndex].exercises = newExercises;
        setWorkouts(newWorkouts);
        console.log("after");
        console.log(w.exercises);

        axios.post("/workouts/put/" + w._id, {exercises: w.exercises})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const removeExercise = (exx) => {
        console.log("hi");
        let es = w.exercises.slice();
        console.log("ES");
        console.log(es);
        let exxIndex = es.findIndex((exercise) => exercise._id == exx._id);
        console.log("IND");
        console.log(exxIndex);
        if(exxIndex > -1){
            es.splice(exxIndex, 1);
        }
        editExercises(es);
        

        return(1);
    }

    const handleAddExercise = (exercise) => {
        let es = w.exercises.slice();
        es.push(exercise);
        editExercises(es);
        setShowCreateExercise(false);
    }

    return (
        <Card className="workoutBody" style={{ width: '18rem' }}>
          <div id="workoutHead">
            <h2 className="workoutName"><p data-editable>{w.name}</p></h2>
            
            <div
                class="modal fade"
                id={"updateWorkout" + w._id}
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
                                Update {w.name}
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
                            action={"/workouts/put/" + w._id}
                            method="POST"
                            class="mb-4"
                        >
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="notes">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={w.name}
                                        class="form-control"
                                    />
                                </div>
                                <br />
                            </div>
                            <div class="modal-body">
                              
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
                                    value="Update Workout"
                                    class="btn btn-primary btn-block"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div id="buttons">
                <button
                    id="updateButton"
                    type="button"
                    class="btn btn-primary btn-block"
                    data-toggle="modal"
                    data-target={
                        "#updateWorkout" + w._id
                    }
                >
                    U
                </button>
                <form action={"/workouts/delete/" + w._id} method="POST" class="mb-4">
                    <input id="delete" type="submit" value="D" class="btn btn-danger"/>
                </form>
            </div>
            <Button id="addExerciseButton" class="warning" onClick={() => setShowCreateExercise(true)}>+</Button>
            <Modal show={showCreateExercise} onHide={() => setShowCreateExercise(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Exercise</Modal.Title>
                </Modal.Header>
                <Modal.Body><CreateExercise workoutID={w._id} handleAddExercise={handleAddExercise} user={user} /></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCreateExercise(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
            
          </div>
          <div id="exerciseList">
            {exercises.map((item)=>{
                return <Exercise removeExercise={removeExercise} editExercises={editExercises} e={item} />
            })}
          </div>
            
        </Card>
    )
}

export default Workout;
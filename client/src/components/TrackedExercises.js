import React, { useState, useEffect } from "react";
import getUser from "../utils/get-user";
import Repetitions from "./Repetitions";
import compare from "../utils/compare"

export default function Weights() {
    const [exercises, setExercises] = useState([]);

    const user = getUser();

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    useEffect(() => {
        fetch(`/trackedexercises/${user.id}`)
            .then((res) => res.json())
            .then((exercises) => setExercises(exercises));
    }, [user.id]);

    exercises.sort(compare)

    return (
        <div>
            <button
                type="button"
                class="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addExercise"
            >
                Add Exercise to Track
            </button>
            <br />
            <br />
            {exercises.map((exercise) => (
                <div>
                    <p>{exercise.name}</p>
                    <button
                        type="button"
                        class="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target={"#addRepetitions" + exercise._id}
                    >
                        Add Repetition to Exercise
                    </button>
                    <br />
                    <br />
                    <Repetitions exercise_id={exercise._id} date={today} />
                        
                    <div
                        class="modal fade"
                        id={"addRepetitions" + exercise._id}
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">
                                        Add Repetitions
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
                                <form action="/repetitions" method="POST" class="mb-4">
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="repetitions">Repetitions</label>
                                            <input
                                                type="number"
                                                name="repetitions"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <input
                                                type="hidden"
                                                name="weights"
                                                value={exercise._id}
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
                                            value="Add Repetitions"
                                            class="btn btn-primary btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div
                class="modal fade"
                id="addExercise"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Add Exercise
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
                        <form action="/trackedexercises" method="POST" class="mb-4">
                            <div class="modal-body">
                                <div class="form-group">
                                    <input
                                        type="hidden"
                                        name="googleId"
                                        value={user.id}
                                        class="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="exercise">Exercise</label>
                                    <input
                                        type="text"
                                        name="name"
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
                                    value="Add Exercise"
                                    class="btn btn-primary btn-block"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

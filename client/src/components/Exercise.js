import React, { useState, useEffect } from "react";
import getUser from "../utils/get-user";
import { Table } from "reactstrap";

export default function Exercise() {
    const [exercises, setExercises] = useState([]);

    const user = getUser();

    useEffect(() => {
        fetch(`/exercises/${user.id}`)
            .then((res) => res.json())
            .then((exercises) => setExercises(exercises));
    }, [user.id]);

    return (
        <div>
            <button
                type="button"
                class="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addExercise"
            >
                Add Exercise
            </button>
            <br />
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
                        <form action="/exercises" method="POST" class="mb-4">
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
                                <div class="form-group">
                                    <label for="sets">Sets</label>
                                    <input
                                        type="number"
                                        name="sets"
                                        class="form-control"
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="repetitions">Repetitions</label>
                                    <input
                                        type="number"
                                        name="repetitions"
                                        class="form-control"
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="weight">Weight</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        class="form-control"
                                    />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="notes">Notes</label>
                                    <input
                                        type="text"
                                        name="notes"
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
                                    value="Save Exercise"
                                    class="btn btn-primary btn-block"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <Table bordered>
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Repetitions</th>
                        <th>Weights</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => (
                        <tr>
                            <td>{exercise.name}</td>
                            <td>{exercise.sets}</td>
                            <td>{exercise.repetitions}</td>
                            <td>{exercise.weight}</td>
                            <td>{exercise.notes}</td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-block"
                                        data-toggle="modal"
                                        data-target={
                                            "#updateExercise" + exercise._id
                                        }
                                    >
                                        Update
                                    </button>
                                </div>

                                <div
                                    class="modal fade"
                                    id={"updateExercise" + exercise._id}
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
                                                    Update Exercise
                                                </h5>
                                                <button
                                                    type="button"
                                                    class="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    <span aria-hidden="true">
                                                        &times;
                                                    </span>
                                                </button>
                                            </div>
                                            <form
                                                action={
                                                    "/exercises/put/" +
                                                    exercise._id
                                                }
                                                method="POST"
                                                class="mb-4"
                                            >
                                                <div class="modal-body">
                                                    <br />
                                                    <div class="form-group">
                                                        <label for="sets">
                                                            Sets
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="sets"
                                                            defaultValue={
                                                                exercise.sets
                                                            }
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <br />
                                                    <div class="form-group">
                                                        <label for="repetitions">
                                                            Repetitions
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="repetitions"
                                                            defaultValue={
                                                                exercise.repetitions
                                                            }
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <br />
                                                    <div class="form-group">
                                                        <label for="weight">
                                                            Weight
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="weight"
                                                            defaultValue={
                                                                exercise.weight
                                                            }
                                                            class="form-control"
                                                        />
                                                    </div>
                                                    <br />
                                                    <div class="form-group">
                                                        <label for="notes">
                                                            Notes
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="notes"
                                                            defaultValue={
                                                                exercise.notes
                                                            }
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
                                                        value="Update Exercise"
                                                        class="btn btn-primary btn-block"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <form
                                    action={"/exercises/delete/" + exercise._id}
                                    method="POST"
                                    class="mb-4"
                                >
                                    <input
                                        type="submit"
                                        value="Delete"
                                        class="btn btn-primary btn-block"
                                    />
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

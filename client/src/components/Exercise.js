import React, { useState, useEffect } from "react";
import getUser from "../utils/get-user";
import compare from "../utils/compare";
import { Table } from "reactstrap";
import "./contai.css";
import ReactHtmlParser from 'react-html-parser';

export default function Exercise() {
    const [exercises, setExercises] = useState([]);

    const user = getUser();
    useEffect(() => {
        fetch(`/exercises/${user.id}`)
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
                Add Custom Exercise
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
                                Add Custom Exercise
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
                                    <label for="description">Description</label>
                                    <input
                                        type="text"
                                        name="description"
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
                                    value="Save Custom Exercise"
                                    class="btn btn-primary btn-block"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <table class = "table table-hover table-bordered table-morecondensed" style={{height: "auto"}}>
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Description</th>
                        <th>Notes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => (
                        <tr style={{paddingBottom:'0px'}}>
                            <td className = "tableentry">{exercise.name}</td>
                            <td>{ReactHtmlParser(exercise.description)}</td>
                            <td>{ReactHtmlParser(exercise.notes)}</td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-block"
                                        data-toggle="modal"
                                        style={{marginBottom: '0px'}}
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
                                                        <label for="description">
                                                            Description
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="description"
                                                            defaultValue={
                                                                exercise.description
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
                                        style = {{marginTop:'0px',marginBottom:'0px'}}
                                    />
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
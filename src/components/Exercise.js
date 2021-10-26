import React, { useState, useEffect } from "react";
import getUser from "../utils/get-user";

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
      <table class="table table-bordered">
        <tr>
          <th>Exercise</th>
          <th>Sets</th>
          <th>Repetitions</th>
          <th>Weights</th>
          <th>Notes</th>
          <th></th>
        </tr>
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
                  data-target="#updateExercise"
                >
                  Update
                </button>
              </div>

              <div
                class="modal fade"
                id="updateExercise"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Update Exercise
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
                      action={"/exercises/put/" + exercise._id}
                      method="POST"
                      class="mb-4"
                    >
                      <div class="modal-body">
                        <br />
                        <div class="form-group">
                          <label for="sets">Sets</label>
                          <input
                            type="number"
                            name="sets"
                            defaultValue={exercise.sets}
                            class="form-control"
                          />
                        </div>
                        <br />
                        <div class="form-group">
                          <label for="repetitions">Repetitions</label>
                          <input
                            type="number"
                            name="repetitions"
                            defaultValue={exercise.repetitions}
                            class="form-control"
                          />
                        </div>
                        <br />
                        <div class="form-group">
                          <label for="weight">Weight</label>
                          <input
                            type="number"
                            name="weight"
                            defaultValue={exercise.weight}
                            class="form-control"
                          />
                        </div>
                        <br />
                        <div class="form-group">
                          <label for="notes">Notes</label>
                          <input
                            type="text"
                            name="notes"
                            defaultValue={exercise.notes}
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
      </table>
    </div>
  );
}

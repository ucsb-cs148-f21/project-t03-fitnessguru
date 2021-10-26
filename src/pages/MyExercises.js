import React from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Exercise from "../components/Exercise";

export default function MyExercises() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <button
          type="button"
          class="btn btn-primary btn-block"
          data-toggle="modal"
          data-target="#addExercise"
        >
          Add Exercise
        </button>
        <br />
        <Exercise />
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
                    <input type="text" name="name" class="form-control" />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="sets">Sets</label>
                    <input type="number" name="sets" class="form-control" />
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
                    <input type="number" name="weight" class="form-control" />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="notes">Notes</label>
                    <input type="text" name="notes" class="form-control" />
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
      </Container>
    </Layout>
  );
}

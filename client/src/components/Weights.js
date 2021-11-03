import React, { useState, useEffect } from "react";
import getUser from "../utils/get-user";
import { Dropdown, Table } from "reactstrap";
import { DropdownButton } from "react-bootstrap";


// Exercise Object: Repetitions Array: Repetition Object: Number, Array of Objects (Weights and Dates)

// Exercise: {Repetitions: [{Reps:[{100, Date1}, {200, Date2}]}]}


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
                Add Exercise to Track
            </button>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#">Action</Dropdown.Item>
  <Dropdown.Item href="#">Another action</Dropdown.Item>
  <Dropdown.Item href="#">Something else</Dropdown.Item>
</DropdownButton>
        </div>
    );
}

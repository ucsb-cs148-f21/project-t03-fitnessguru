import React from 'react'
import {useState} from 'react'
import CreateWorkout from './CreateWorkout'
import ListWorkouts from './ListWorkouts';

const CreateSplit = ({handleAddSplit}) => {
    let split = {};
    const [workouts, setWorkouts] = useState([]);
    const [showAddWorkout, setShowAddWorkout] = useState(false);

    const handleSetShowAddWorkout = (e) => {
        e.preventDefault();
        return(setShowAddWorkout(true));
    }

    const handleAddWorkout = (workout) => {
        const newWorkouts = workouts.concat(workout);
        setWorkouts(newWorkouts);
        return(
            setShowAddWorkout(false)
        )
    }

    const handleCreateSplitObject = () => {
        split.name = document.getElementById("splitName").value;
        split.notes = document.getElementById("notes").value;
        split.workouts = workouts;
        return(handleAddSplit(split));
    }
    return(
        <div>
        <form className="createSplitForm">
            <label htmlFor="splitName">Split name:</label><br></br>
            <input type="text" id="splitName" name="splitName" /><br></br>
            <label htmlFor="lname">Notes:</label><br></br>
            <textarea id="notes" name="notes"></textarea><br></br>
            <h3 id="workouts">Workouts: </h3>
            <ListWorkouts workouts={workouts} />
            <button className="addWorkout" onClick={handleSetShowAddWorkout}>Add Workout</button><br />
            {showAddWorkout && <CreateWorkout handleAddWorkout={handleAddWorkout}/>}
            <button id="addSplit" type="button" onClick={handleCreateSplitObject}>Add Split</button>
        </form>
        </div>
    )
}

export default CreateSplit
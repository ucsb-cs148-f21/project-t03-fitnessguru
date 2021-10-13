import React from 'react'
import {useState} from 'react'
import CreateWorkout from './CreateWorkout'
import ListWorkouts from './ListWorkouts';
import './CreateSplit.css'

const CreateSplit = ({handleAddSplit}) => {
    let split = {};
    const [workouts, setWorkouts] = useState([]);
    const [showAddWorkout, setShowAddWorkout] = useState(false);
    const [showAddWorkout1, setShowAddWorkout1] = useState(true);

    const handleSetShowAddWorkout = (e) => {
        e.preventDefault();
        setShowAddWorkout1(false);
        return(setShowAddWorkout(true));
    }

    const handleAddWorkout = (workout) => {
        const newWorkouts = workouts.concat(workout);
        setWorkouts(newWorkouts);
        setShowAddWorkout1(true);
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
        <div className="makeNewSplit">
            <form className="createSplitForm">
                <div className="addName">
                    <label htmlFor="splitName">Split name:</label><br></br>
                    <input type="text" id="splitName" name="splitName" /><br></br>
                </div>
                <div className="addNotes">
                    <label htmlFor="lname">Notes:</label><br></br>
                    <textarea id="notes" name="notes"></textarea><br></br>
                </div>
            </form>
            <div className="showWorkouts">
                <h3 id="workouts">Workouts: </h3>
                <div id="workoutList">
                    <ListWorkouts workouts={workouts} />
                </div>
               
                {showAddWorkout1 && <button className="addWorkout" onClick={handleSetShowAddWorkout}>Add Workout</button>}<br /> 
                {showAddWorkout && <CreateWorkout handleAddWorkout={handleAddWorkout}/>}
            </div>
            <button id="addSplit" type="button" onClick={handleCreateSplitObject}>Add Split</button>
        </div>
        
    )
}

export default CreateSplit
import './App.css';
import React from 'react'
import {useState} from 'react'
import CreateExercise from './components/CreateExercise'
import CreateWorkout from './components/CreateWorkout'
import CreateSplit from './components/CreateSplit'
import ListSplits from './components/ListSplits'

function App() {
  const [splits, setSplits] = useState([]);
  const [showAddSplit, setShowAddSplit] = useState(false);

  const handleCreateSplit = (e) => {
    e.preventDefault();
    return(setShowAddSplit(true));
  }

  const handleAddSplit = (split) => {
    const newSplits = splits.concat(split);
    return(setSplits(newSplits))
  }
  console.log("test");
  console.log(splits);
  return (
    <div className="App">
      <h1>Welcome to Fitness Guru!</h1>
      <button id="addSplit" type="button" onClick={handleCreateSplit}>Add Split</button>
      {showAddSplit && <CreateSplit handleAddSplit={handleAddSplit}/>}
      <h2>My Splits:</h2>
      <ListSplits splits={splits} />

    </div>
  );
}

export default App;

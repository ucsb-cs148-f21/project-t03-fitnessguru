import React, {useState} from 'react';
import Layout from '../components/Layout';
import getUser from "../utils/get-user";
import Container from "react-bootstrap/Container";
import CreateExercise from '../components/CreateExercise'
import CreateWorkout from '../components/CreateWorkout'
import CreateSplit from '../components/CreateSplit'
import ListSplits from '../components/ListSplits'


const WorkoutPage = () => {
    const user = getUser();

    const [splits, setSplits] = useState([]);
    const [showAddSplit, setShowAddSplit] = useState(false);
    const [showAdd, setShowAdd] = useState(true);
  
    const handleCreateSplit = (e) => {
      e.preventDefault();
      setShowAdd(false);
      return(setShowAddSplit(true));
    }
  
    const handleAddSplit = (split) => {
      const newSplits = splits.concat(split);
      setShowAddSplit(false);
      setShowAdd(true);
      return(setSplits(newSplits))
    }

    return (
        <Layout user={user}>
            <Container>
                <h1>Workout!</h1>
                {showAdd && <button id="addSplit" type="button" onClick={handleCreateSplit}>Add Split</button>}
                {showAddSplit && <CreateSplit handleAddSplit={handleAddSplit}/>}
                <h2>My Splits:</h2>
                <ListSplits splits={splits} />
            </Container>
        </Layout>
    )
}

export default WorkoutPage;
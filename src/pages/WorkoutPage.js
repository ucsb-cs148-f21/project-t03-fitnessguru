import React, { useState } from "react";
import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import Container from "react-bootstrap/Container";
import CreateSplit from "../components/Workout/CreateSplit";
import ListSplits from "../components/Workout/ListSplits";

const WorkoutPage = () => {
  const user = getUser();

  const [splits, setSplits] = useState([]);
  const [showAddSplit, setShowAddSplit] = useState(false);
  const [showAdd, setShowAdd] = useState(true);

  const handleCreateSplit = (e) => {
    e.preventDefault();
    setShowAdd(false);
    return setShowAddSplit(true);
  };

  const handleAddSplit = (split) => {
    const newSplits = splits.concat(split);
    setShowAddSplit(false);
    setShowAdd(true);
    return setSplits(newSplits);
  };

<<<<<<< HEAD
    const handleDeleteSplit = (split) => {
      console.log(splits);
      let newSplits = splits;
      const index = newSplits.indexOf(split);
      if(index > -1){
        newSplits.splice(index,1);
      }
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
                <ListSplits handleDeleteSplit={handleDeleteSplit} splits={splits} />
            </Container>
        </Layout>
    )
}
=======
  return (
    <Layout user={user}>
      <Container>
        <h1>Workout!</h1>
        {showAdd && (
          <button id="addSplit" type="button" onClick={handleCreateSplit}>
            Add Split
          </button>
        )}
        {showAddSplit && <CreateSplit handleAddSplit={handleAddSplit} />}
        <h2>My Splits:</h2>
        <ListSplits splits={splits} />
      </Container>
    </Layout>
  );
};
>>>>>>> 76feff88ed0ec67c93d2e7d5a274059765dc1231

export default WorkoutPage;

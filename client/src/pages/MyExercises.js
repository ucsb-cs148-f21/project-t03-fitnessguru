import React from "react";
import {useState} from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Exercise from "../components/Exercise";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const Exx = ({exercise}) => {
  return(
    <>
    <h1>{exercise.name}</h1>
    <p>{exercise.description}</p>
    </>
  )
}

export default function MyExercises() {
  const user = getUser();
  const [exercises,setExercises] = useState();

  const handleGetExercises = (category) => {
    const url = `https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=${category}`
    axios.get(url)
      .then((res) => setExercises(res.data.results))
      .catch((error) => console.log(error))
  }

  console.log("test");
  console.log(exercises)
  return (
    <Layout user={user}>
      <Container>
        <Exercise />        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Exercises
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleGetExercises(8)}>Arms</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetExercises(9)}>Legs</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetExercises(10)}>Abs</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetExercises(11)}>Chest</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetExercises(12)}>Back</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetExercises(13)}>Shoulders</Dropdown.Item>
            <Dropdown.Item onClick={() => handleGetExercises(14)}>Calves</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      {exercises && exercises.map(exercise => <Exx exercise={exercise}/>)}
        
      </Container>
    </Layout>
  );
}

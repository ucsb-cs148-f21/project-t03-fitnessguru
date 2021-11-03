import React from "react";
import {useState} from 'react';
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Exercise from "../components/Exercise";

import axios from 'axios';


const Exx = ({e}) => {
  return(
    <Container>
      <h1>{e.name}</h1>
      {e.description}
    </Container>
  )
}
export default function MyExercises() {
  const user = getUser();
  const exercisesEndpoint = "https://wger.de/api/v2/exercise/?language=2&category=9";
  const [exercises,setExercises] = useState();

  
  
  const showExercises = (e) => {
    e.preventDefault();
    axios.get(exercisesEndpoint)
    .then(res => {
      console.log(res.data.results);
      setExercises(res.data.results);
    })
  }

  return (
    <Layout user={user}>
      <Container>
        
        <Exercise />
        <button onClick={showExercises}>Show Exercises</button>
  {exercises && exercises.map((exercise) => <Exx e={exercise} />)}
      </Container>
    </Layout>
  );
}

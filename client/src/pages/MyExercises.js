import React from "react";
import {useState} from "react";
import Container from "react-bootstrap/Container";

import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Exercise from "../components/Exercise";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "./MyExercises.css";

const Exx = ({exercise}) => {
  return(
    <>
    <h1>{exercise.name}</h1>
    <p>{exercise.description}</p>
    </>
  )
}

const ExerciseCatDropDown = ({exercises, title}) => {
  return(
  <>
  <Dropdown id="Primary">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {title}
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
      {exercises.map(exercise => <Dropdown.Item onClick={() => console.log("hi")}>{exercise.name}</Dropdown.Item>)}
    </Dropdown.Menu>
  </Dropdown>
  </>
  )
}

export default function MyExercises() {
  const user = getUser();
  const [arms,setArms] = useState();
  const [legs, setLegs] = useState();
  const [abs, setAbs] = useState();
  const [chest,setChest] = useState();
  const [back, setBack] = useState();
  const [shoulders,setShoulders] = useState();
  const [calves, setCalves] = useState();

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=8")
      .then((res) => setArms(res.data.results))
      .catch((error) => console.log(error))

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=9")
      .then((res) => setLegs(res.data.results))
      .catch((error) => console.log(error))

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=10")
      .then((res) => setAbs(res.data.results))
      .catch((error) => console.log(error))

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=11")
      .then((res) => setChest(res.data.results))
      .catch((error) => console.log(error))

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=12")
      .then((res) => setBack(res.data.results))
      .catch((error) => console.log(error))

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=13")
      .then((res) => setShoulders(res.data.results))
      .catch((error) => console.log(error))

  axios.get("https://wger.de/api/v2/exercise/?limit=100&offset=0&language=2&category=14")
      .then((res) => setCalves(res.data.results))
      .catch((error) => console.log(error))

  return (
    <Layout user={user}>
      <Container>
      <div id="categories">  
        {arms && <ExerciseCatDropDown className="category" exercises={arms} title="Arms" />}
        {legs && <ExerciseCatDropDown className="category" exercises={legs} title="Legs" />}
        {chest && <ExerciseCatDropDown className="category" exercises={chest} title="chest" />}
        {back && <ExerciseCatDropDown className="category" exercises={back} title="back" />}
        {abs && <ExerciseCatDropDown className="category" exercises={abs} title="abs" />}
        {shoulders && <ExerciseCatDropDown className="category" exercises={shoulders} title="shoulders" />}
        {calves && <ExerciseCatDropDown className="category" exercises={calves} title="calves" />}
        </div>  
        <Exercise />    
        
      </Container>
    </Layout>
  );
}

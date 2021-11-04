import React, { Component, useState, useEffect } from 'react'
import getUser from "../utils/get-user";
import Chart from '../components/Chart';
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { DropdownButton, Dropdown } from 'react-bootstrap';


export default function ProgressPage(){  

  const [selectedExercise, setSelectedExercise] = useState('')
  const [exercises, setExercises] = useState([])
  const [chartData, setChartData] = useState(
            {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets:[ {
                label:'Weight in lb',
                data:[
                  65,
                  65,
                  80,
                  70,
                  90,
                  120
                ]
              }
            ]
          })
  const user = getUser();

  useEffect(() => {
    fetch(`/exercises/${user.id}`)
    .then(res => res.json())
    .then(exercises => {setExercises(exercises) ; setSelectedExercise(exercises[0].name)})
}, [user.id])


function getChartData(){
    // Databse gets calls here
    setChartData({
        labels: [],
        datasets:[]
    });
  }
    return (
      <Layout user={user}>
        <Container>
            <h2>Check Your Progress</h2>
            <DropdownButton id="dropdown-basic-button" title="Select an Exercise" menuVariant = 'light'>
              {exercises.map(exercise =>
                <Dropdown.Item onClick = {() => setSelectedExercise(exercise.name)}> 
                  {exercise.name}
                </Dropdown.Item>
              )}
            </DropdownButton>   
            {  
            exercises.filter(exercise => exercise.name === selectedExercise).map(exercise => 
            <Chart chartData={chartData} exercise = {exercise.name}/>
            )}
        </Container>
      </Layout>  
    );
}
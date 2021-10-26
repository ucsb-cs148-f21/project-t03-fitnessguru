import React, { Component, useState, useEffect } from 'react'
import getUser from "../utils/get-user";
import Chart from '../components/Chart';
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Exercise from '../components/Exercise';


export default function ProgressPage(){  

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
    .then(exercises => setExercises(exercises))
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
            {exercises.map(exercise => 
            <Chart chartData={chartData} exercise = {exercise.name}/>
            )}
          </Container>
      </Layout>  
    );
}
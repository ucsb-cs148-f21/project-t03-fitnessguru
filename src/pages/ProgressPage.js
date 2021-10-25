import React, { Component } from 'react';
import getUser from "../utils/get-user";
import Chart from '../components/Chart';
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";


class ProgressPage extends Component {  
  user = getUser();

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){ 
    this.getChartData();
  }

  getChartData(){
    // Databse gets calls here
    this.setState({
      chartData:{
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
      }
    });
  }

  render() {
    return (
      <Layout user={this.user}>
        <Container>
            <h2>Check Your Progress</h2>
            <Chart chartData={this.state.chartData} exercise = "Bench Press"/>
            <Chart chartData={this.state.chartData} exercise = "Overhead Shoulder Press"/>
            <Chart chartData={this.state.chartData} exercise = "Front Squat"/>
          </Container>
      </Layout>  
        );
      }
}
export default ProgressPage;
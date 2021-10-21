import React, { Component } from 'react';
import getUser from "../utils/get-user";
import Chart from '../components/Chart';
import Layout from "../components/Layout";

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
        datasets:[
          {
            label:'Weight in lb',
            fill: false ,
            data:[
              65,
              65,
              80,
              70,
              90,
              120
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <Layout user={this.user}>
        <div>
          <div className="pp-header">
            <h2>Check Your Progress</h2>
          </div>
            <Chart chartData={this.state.chartData} exercise = "Bench Press"/>
            <Chart chartData={this.state.chartData} exercise = "Overhead Shoulder Press"/>
          </div>
      </Layout>  
        );
      }
}
export default ProgressPage;
import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    exercise:'Bench Press'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          width={40}
	        height={20}
          options={{
            pointRadius: 5,
            pointBackgroundColor: 'Red',
            borderColor: 'Gray',
            plugins:{
              title:{
                display:this.props.displayTitle,
                text:'Weight Changes for '+ this.props.exercise,
                color: 'rgba(54, 162, 235, 0.6)', 
                font: { size: 25, weight:'900'}
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            },
            scales: {
              y: {
                title:{
                  display: true,
                  text: 'Weight Utilized in lb',
                  color: 'rgba(54, 162, 235, 0.6)', 
                  font: { size: 20, weight:'900'}
                },
                ticks: {
                  callback: function(value, index, values) {
                    return value + ' lb';
                  }
                }
              },
              x: {
                title:{
                  display: true,
                  text: 'Time',
                  color: 'rgba(54, 162, 235, 0.6)',               
                  font: { size: 20, weight:'900'}
                }
              }
            }
        }}
    />
      </div>
    )
  }
}

export default Chart;

// Bar Code
        {/* <Bar
          data={this.state.chartData}
          width={40}
	        height={20}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Weight Changes for '+ this.props.exercise,
              fontSize:15
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition,
              labels:{
                fontColor: '000'
              }
            }
          }}
        /> */}
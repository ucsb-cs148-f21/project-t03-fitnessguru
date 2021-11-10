import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
function Chart(props){
  const defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'left',
  }
    return (
      <div className="chart">
        <Line
          data={props.chartData}
          width={40}
	        height={20}
          options={{
            pointRadius: 5,
            pointBackgroundColor: 'Red',
            borderColor: 'Gray',
            plugins:{
              title:{
                display:props.displayTitle,
                text:'Weight Changes for '+ props.exercise + ", " + props.repetitions + " Repetitions",
                color: 'rgba(54, 162, 235, 0.6)', 
                font: { size: 25, weight:'900'}
              },
              legend:{
                display:props.displayLegend,
                position:props.legendPosition
              }
            },
            scales: {
              y: {
                title:{
                  display: true,
                  text: 'Weight (lb)',
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

export default Chart;
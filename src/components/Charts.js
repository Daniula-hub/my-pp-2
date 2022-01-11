import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line, Bar, Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

const Charts = (props) => {
     const {metricData, type} = props;
     const labels = metricData.map(value => value.labels);
     const dataOptions = metricData.map(value => value.quantity);
     const graphicLabel = type === 'line' ? 'Education Types By Highest Scores' : type === 'bar' ? 'Category Type By Difficulty' : 'Category Type By Education';     
     
     const data = {
          labels: labels,
          datasets: [{
               label: graphicLabel,
               backgroundColor: type === 'doughnut'  ? [                    
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                    'rgb(206, 170, 227)'
               ] : type === 'bar' ? [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(176, 9, 9, 0.2)'     
               ] : 'rgb(255, 99, 132)',
               borderColor: type === 'doughnut' ? [
                    'rgb(255, 255, 255)'
               ] : type === 'bar' ? [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
               ] : 'rgb(255, 99, 132)',
               borderWidth: 1,
               data: dataOptions,
               hoverOffset: 4
          }]
     };

     const options = {
          scales: {
               y: {
               beginAtZero: true
               }
          },
          responsive: true
     }
     
     return (          
          <div className='container-fluid'>               
               <div className='row'>
                    <div className='col-12'>
                              {type === 'line' ? (
                                   <Line data={data} options={options} height={400} width={600} id={`myChart_${type}`}/>
                              ) : type === 'bar' ? (
                                   <Bar data={data} options={options} height={400} width={600} id={`myChart_${type}`}/>
                              ) : (
                                   <Doughnut data={data} options={options} height={400} width={600} id={`myChart_${type}`}/>
                              )}
                    </div>                    
               </div>
          </div>
     )
}

export default Charts;

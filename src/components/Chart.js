import React from 'react';

const Chart = (props) => {
     const {metricData, type} = props;
     const labels = metricData.map(value => value.labels);
     const dataOptions = metricData.map(value => value.quantity);
     const graphicLabel = type === 'line' ? 'Education Types By Highest Scores' : type === 'bar' ? 'Category Type By Difficulty' : 'Category Type By Education';

     const data = {
          labels: labels,
          datasets: [{
               label: graphicLabel,
               backgroundColor: 'rgb(255, 99, 132)',
               borderColor: 'rgb(255, 99, 132)',
               data: dataOptions,
          }]
     };

     const config = {
          type: type,
          data: data,
          options: {
               scales: {
                 y: {
                   beginAtZero: true
                 }
               }
          }, 
     }
     console.log("Data for graphic", config);
     
     return (
          <div className='container-fluid'>
               <div className='row'>
                    <div className='col-4'>
                         <canvas>

                         </canvas>
                    </div>
               </div>
          </div>
     )
}

export default Chart;
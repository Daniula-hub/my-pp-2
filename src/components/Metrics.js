import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from './Chart';

const Metrics = (props) => {
     const [metricsData, setMetricsData] = useState([]);

     useEffect(() => {
          if (metricsData.length === 0) {
               const endpointsCalls = [axios.get("/getCategoryByEducation"),
               axios.get("/getDifficultyByCategory"),
               axios.get("/getEducationByhighestScores")];

               axios.all(endpointsCalls)
               .then(axios.spread((categoryByEducationResponse, difficultyByCategoryResponse, educationByhighestScoresResponse) => {
                    setMetricsData([categoryByEducationResponse.data, difficultyByCategoryResponse.data, educationByhighestScoresResponse.data]);
               }))
               .catch(err => {
                    console.log("There was an error retrieving the metrics data.", err);
               })
          }
     }, [metricsData])

     return(
          <div className='container-fluid'>
               <div className='row'>
                    {metricsData.map(metric => {
                         let index = metricsData.indexOf(metric);
                         return (
                              <div className='col-4' key={index}>
                                   <Chart metricData={metric} type={index === 0 ? 'doughnut' : index === 1 ? 'bar' : 'line'}/>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}

export default Metrics;
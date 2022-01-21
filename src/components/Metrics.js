import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Charts from './Charts';

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
               {metricsData.map(metric => {
                    let index = metricsData.indexOf(metric);
                    return (
                         <div className='row' key={index} style={{marginTop: '7rem'}}>
                              <div className='col-2'></div>
                              <div className='col-8'>
                                   <Charts metricData={metric} type={index === 0 ? 'doughnut' : index === 1 ? 'bar' : 'line'}/>
                              </div>
                              <div className='col-2'></div>
                         </div>
                    )
               })}
          </div>
     )
}

export default Metrics;
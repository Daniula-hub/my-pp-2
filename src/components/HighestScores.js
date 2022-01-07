import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from './Modal';
import './styles/highestScores.css';

const HighestScores = (props) => {
     const [highestScores, setHighestScores] = useState([]);
     let user;
     let score;
     if(props.history.location){
          user = props.history.location.state?.user;
          score = props.history.location.state?.score;
     }

     useEffect(() => {
          if(highestScores.length === 0) fetchData()
     }, [highestScores]);

     const fetchData = () => {
          axios
          .get('/getHighestScores')
          .then(res => {               
               setHighestScores(setCounters(res.data));
          })
          .catch(err => {
               console.log("Highest Scores couldn't load: ", err)
          })
     }

     const setCounters = (data) => {
          try {
               for (const key in data) {
                    if (!isNaN(key) ) {
                         data[key]['counter'] = parseInt(key) + 1;
                    }
               }

               return data;               
          } catch (error) {
               console.log("Counters couldn't be defined by object keys, instead it was set by default. Probably the object keys were not numbers.", error);
               
               for (let i= 0; i < data.length; i++) {
                    let counter = i + 1;
                    data[i]['counter'] = counter;
               }

               return data;
          }
     }

     return (
          <>
               {user && score ? (
                     <Modal user={user} score={score} completePage={true}/>
               ) : null}
               <div className='container-fluid'>
                    <div className='row'>
                         <div className='col-3'></div>
                         <div className='col-6 scores-table'>
                              <table className="table table-dark table-striped">
                                   <thead>
                                        <tr>
                                             <th scope="col">#</th>
                                             <th scope="col">User Name</th>
                                             <th scope="col">Total Score</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {highestScores.map(score => {
                                             return (
                                                  <tr key={ score.counter }>
                                                       <th>{ score.counter }</th>
                                                       <th>{ score.user_name }</th>
                                                       <th>{ score.highest_score }</th> 
                                                  </tr>
                                             );
                                        })}
                                   </tbody>
                              </table>
                         </div>
                         <div className='col-3'></div>
                    </div>                              
               </div>               
          </>
     );
}

export default HighestScores;
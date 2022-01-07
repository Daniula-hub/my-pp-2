import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
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
               {user && score ? (
                     <div className="modal fade" id="scoremodal" tabIndex="-1">
                     <div className="modal-dialog">
                     <div className="modal-content bg-dark">
                          <div className="modal-header">
                               <h5 className="modal-title text-light">Trivia Me</h5>
                               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body text-light">
                          <img src={user.profile_pic} id="profile_pic"/>
                          <p>Hi {user.user_name}! Your latest score was {score}. Check if you are in the top ten.</p>
                          </div>
                          <div className="modal-footer">
                               <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
                          </div>
                     </div>
                     </div>
                     </div> 

                    // <div className='row'>
                    //      <div className='col-3'>
                    //      <img src={user.profile_pic} id="profile_pic"/>
                    //           <p>Hi {user.user_name}! Your latest score was {score}. Check if you are in the top ten.</p>
                    //      </div>
                    // </div>
               ) : null}
               
          </div>
     );
}

export default HighestScores;
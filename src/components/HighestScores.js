import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import './styles/highestScores.css';

const HighestScores = (props) => {
     const [counter, setCounter] = useState(0);
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
               setHighestScores(res.data);
          })
          .catch(err => {
               console.log("Highest Scores couldn't load: ", err)
          })
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
                                             <tr key={ counter + 1 }>
                                                  <th>{ counter + 1 }</th>
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
                    <div className='row'>
                         <div className='col-3'>
                         <img src={user.profile_pic} id="profile_pic"/>
                              <p>Hi {user.user_name}! Your latest score was {score}. Check if you are in the top ten.</p>
                         </div>
                    </div>
               ) : null}
          </div>
     );
}

export default HighestScores;
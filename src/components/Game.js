import React, { useEffect, useState } from 'react';
import axios from "axios";
import Question from "./Question";
import './styles/Game.css';
import { useSelector } from "react-redux";

const Game = (props) => {
     const [category, setCategory] = useState(0);
     const [difficulty, setDifficulty] = useState("");
     const [questions, setQuestions] = useState([]);
     const [options, setOptions] = useState();
     const [currentQuestion, setCurrentQuestion] = useState(0);
     const [score, setScore] = useState(0);
     const { user_redux } = useSelector((store) => store.auth);
          
     useEffect(() => {
          setOptions(
            questions.length > 0 &&
              handleShuffle([
                questions[currentQuestion]?.correct_answer,
                ...questions[currentQuestion]?.incorrect_answers,
              ])
          );
     }, [currentQuestion, questions]);

     const handleShuffle = (options) => {
          return options.sort(() => Math.random() - 0.5);
     };

     const handlerStartGame = () => {
          axios
          .get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
          .then(res => {
               setQuestions(res.data.results);
          })
          .catch(err => {
               console.log("There was an error retrieving the questions from the API: ", err);
          })
     }     
     
     return (
          <div>
               {questions.length === 0 ? 
                    <div className='container-fluid'>
                         <div className='row'>
                              <div className='col-2'></div>
                              <div className='col-8'>
                              <form>
                                   <div className="form-row">
                                        <div className="form-row">
                                             <div className="form-group col-md-12">
                                             <label htmlFor="inputGender">Select Category</label>
                                             <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setCategory(e.target.value)}>
                                                  <option value="">Select one option</option>
                                                  <option value="9">General Knowledge</option>
                                                  <option value="10">Books</option>
                                                  <option value="11">Films</option>
                                                  <option value="12">Music</option>
                                                  <option value="13">Musicals and Theaters</option>
                                                  <option value="14">Television</option>
                                                  <option value="15">Video Games</option>
                                                  <option value="16">Board Games</option>
                                                  <option value="17">Science and Nature</option>
                                                  <option value="18">Computer</option>
                                                  <option value="19">Mathematics</option>
                                                  <option value="20">Mythology</option>
                                                  <option value="21">Sports</option>
                                                  <option value="22">Geography</option>
                                                  <option value="23">History</option>
                                                  <option value="24">Politics</option>
                                                  <option value="26">Celebrities</option>
                                                  <option value="27">Animals</option>
                                                  <option value="28">Vehicles</option>
                                                  <option value="29">Comics</option>
                                                  <option value="30">Gadgets</option>
                                                  <option value="31">Japanese Anime</option>
                                                  <option value="32">Cartoon and Animations</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="form-row">
                                        <div className="form-group col-12">
                                             <label htmlFor="inputGender">Select Difficulty</label>
                                             <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => setDifficulty(e.target.value)}>
                                                  <option value="">Select one option</option>
                                                  <option value="easy">Easy</option>
                                                  <option value="medium">Medium</option>
                                                  <option value="hard">Hard</option>
                                             </select>
                                        </div>
                                   
                                   </div>
                                   <div className="form-row">
                                        <div className="form-group col-md-6">
                                             <button type="button" className="btn btn-primary btn-lg" onClick={handlerStartGame}>Start Game!</button>
                                        </div>
                                   </div>
                                   </div>
                              </form>
                              </div>
                              <div className='col-2'></div>
                         </div>
                    </div> : 
                    (
                         <div className='container-fluid'>
                              <div className='row'>
                                   {/* <div className='col-2'></div>
                                   <div className='col-2'>
                                        <img src={user_redux?.profile_pic} id="profile_pic"/>
                                   </div>
                                   <div className='col-4'>
                                        <h1 className='welcome'>Welcome {user_redux?.user_name}!</h1>                                        
                                   </div> */}
                                   <div className='col-2' >
                                        <h1 className='score'>Score: {score}</h1>
                                   </div>
                              </div>
                              <div className='row'>
                                   <div className='col-2'></div>
                                   <div className='col-8'>
                                        <Question 
                                             currentQuestion={currentQuestion}
                                             setCurrentQuestion={setCurrentQuestion}
                                             questions={questions}
                                             options={options}
                                             correct={questions[currentQuestion].correct_answer}
                                             score={score}
                                             setScore={setScore}
                                             setQuestions={setQuestions}
                                             user={user_redux}
                                        />
                                   </div>
                                   <div className='col-2'></div>
                              </div>
                         </div>
                    )
               }
          </div>
     );
}

export default Game;
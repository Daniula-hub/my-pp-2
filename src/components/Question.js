import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "./ErrorMessage";
import './styles/Question.css'
import './styles/errorMessage.css';


const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
  user
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQuestion > 8) {
      axios
        .post('/saveScore', {user, score})
        .then(res => {
          history.push({
            pathname: '/highestscores',
            state: {
              score : score,
              user : user
            }
          })
        })
        .catch()      
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions([]);
  };

  const htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  return (
    <>
    <div className="question">      
      <h2>Question #{currentQuestion + 1}</h2>
      <h3>{questions[currentQuestion].category}</h3>
     
      <div className="singleQuestion">
        <h3 dangerouslySetInnerHTML={{ __html: htmlDecode(questions[currentQuestion].question) }} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
                dangerouslySetInnerHTML={{ __html: htmlDecode(i)}}
              />    
            ))}
        </div>
        <div className="controls">
          <button className='btn btn-warning btn-lg' type="button" onClick={() => handleQuit()}> Quit </button>
          <button className='btn btn-success btn-lg' type='button' onClick={handleNext}> {currentQuestion > 8 ? "Submit" : "Next Question"} </button>
        </div>
      </div>
    </div>
    </>
  );
};


export default Question;
import React from 'react';
import './styles/Question.css'
import { getUser } from "../redux/authReducer";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "./ErrorMessage";


const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
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
      history.push("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
    setQuestions();
  };

  return (
    <div className="question">      
      <h1>Question # {currentQuestion + 1} </h1>
      <h2>{questions[currentQuestion].category}</h2>

      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <button className='quit' type="button" onClick={() => handleQuit()}> Quit </button>
          <button className='submit' type='button' onClick={handleNext}> {currentQuestion > 20 ? "Submit" : "Next Question"} </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
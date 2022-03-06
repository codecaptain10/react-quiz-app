import React, { useState } from "react";
//Coponents
import QuestionCard from "./components/QuastionCard";

const TOTAL_QUESTIONS = 10;

function App() {
  //Link to Question from API: https://opentdb.com/api.php?amount=10&category=18&type=multiple
  //Use catamaran fonr: font-family: 'Catamaran', sans-serif;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {};

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>React Quiz App</h1>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

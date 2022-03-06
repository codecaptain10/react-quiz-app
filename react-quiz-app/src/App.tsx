import React from "react";
//Coponents
import QuestionCard from "./components/QuastionCard";

function App() {
  //Link to Question from API: https://opentdb.com/api.php?amount=10&category=18&type=multiple
  //Use catamaran fonr: font-family: 'Catamaran', sans-serif;
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
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

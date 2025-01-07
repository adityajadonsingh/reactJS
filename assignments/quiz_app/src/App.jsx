import { useEffect, useState } from "react";
import "./App.css";
import QuizCard from "./QuizCard";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, []);
  const startQuiz = () => {
    setQuizStarted(!quizStarted);
  }

  console.log(questions);
  return (
    <>
      <div className="container mx-auto my-20">
        <h1 className="text-center font-bold text-4xl text-[#5e5ee6]">Quiz</h1>
        <hr className="my-5" />
        <div className="mt-7 w-full flex justify-center">
          <div className="w-3/5 rounded-md border shadow-md py-10 px-5">
            
            {quizStarted && currentQuestion <= questions.length-1  ? (
              <>
              <QuizCard questionIdx={currentQuestion} question={questions[currentQuestion]} score={score} setScore={setScore} currentQuestion={currentQuestion} currentQuestionFunc={setCurrentQuestion} />
              <div className="time flex gap-x-3 mt-4">
                <span className="block font-bold">Time Left:</span>
                <span className="block">10 sec</span>
              </div>
              </>
            ) : (
              currentQuestion <= questions.length-1 ?
              <>
               <div className="flex justify-center items-center h-60 w-full">
                <button className="text-2xl bg-[#5e5ee6] hover:bg-[#6a6add] py-2 px-5 rounded text-white font-bold" onClick={startQuiz}>Start Quiz</button>
               </div>
              </>
              :
              <>
                <div className="flex justify-center items-center h-60 w-full flex-col gap-y-4">
                  <span className="block text-2xl">Your Score</span>
                <span className="block font-bold text-3xl">{`${score}/${questions.length}`}</span>
               </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

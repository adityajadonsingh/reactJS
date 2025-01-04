import { useEffect, useState } from "react";
import "./App.css";
import QuizCard from "./QuizCard";
import axios from "axios";

function App() {

  const [questions, setQuestion] = useState([]);

  useEffect(()=>{
    const response = axios.get("https://opentdb.com/api.php?amount=10");
    
    console.log(response)
  }, [])

  return (
    <>
      <div className="container mx-auto my-20">
        <h1 className="text-center font-bold text-4xl text-[#5e5ee6]">Quiz</h1>
        <hr className="my-5" />
        <div className="mt-7 w-full flex justify-center">
          <div className="w-3/5 rounded-md border shadow-md py-10 px-5">
            <QuizCard />
            <div className="time flex gap-x-3 mt-4">
              <span className="block font-bold">Time Left:</span>
              <span className="block">10 sec</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

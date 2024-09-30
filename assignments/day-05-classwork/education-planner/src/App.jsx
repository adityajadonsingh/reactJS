import { useState } from "react";
import "./App.css";
const App = () => {
  
  const [newArray, setArray] = useState([]);

console.log(newArray)
  const addSubject = () => {
    const input = document.querySelector(".subject-input").value;
    const inputHours = Number(document.querySelector(".subject-hours").value);
    const subjectDetails = {
      Subject : input,
      SubjectHours : inputHours
    }

    setArray([...newArray, subjectDetails]);
  }

  const increaseHour = (idx) => {
    const updatedArray = [...newArray];
    updatedArray[idx].SubjectHours += 1;
    setArray(updatedArray);
  }
  const decreaseHour = (idx) => {
    const updatedArray = [...newArray];
    if(updatedArray[idx].SubjectHours > 0){
      updatedArray[idx].SubjectHours -= 1;
    }
    setArray(updatedArray);
  }



  return (
    <>
      <h1>Geekster Planner</h1>
      <div className="input-div">
        <input className="subject-input" type="text" placeholder="Subject" />
        <input className="subject-hours" type="text" placeholder="Hours" />
        <button onClick={addSubject} className="add">Add</button>
      </div>
      <div className="deck">

        {
          newArray.map((item, idx) => <div key={idx+"_card"} className="card">
          <div className="text">
            <span>{item.Subject}</span>
            <span>-</span>
            <span>{item.SubjectHours} Hours</span>
          </div>
          <div className="controls">
            <button onClick={() => increaseHour(idx)} className="inc">+</button>
            <button onClick={() => decreaseHour(idx)} className="dec">-</button>
          </div>
        </div>)
        }

        
      </div>
    </>
  );
};

export default App;

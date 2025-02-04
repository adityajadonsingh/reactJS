import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [progress, setProgress] = useState(-100);
  const transform = {
    "transform" : `translateX(${progress}%)`,
    "transtion" : "linear transform 0.1s"
  }
  useEffect(()=>{
    const progressInterval = setInterval(()=>{
      setProgress((prev) => {
        if(prev >= 0){
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(progressInterval);
  },[])
  return (
    <>
      <h2 style={{ marginBottom: "10px" }}>Progress Bar</h2> 
      <div className="container">
        <div className="progress-bar">
          <span>{progress + 100} %</span>
          <div style={transform} className="completion"></div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ExerciseCard from "./ExerciseCard";

function App() {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("");
  const [exersiseIdx, setExerciseIdx] = useState(0);

  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    params: {
      limit: "30",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": "4334a506bfmshb930ce8a4f5fae0p12ed91jsn8a673be94331",
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  const cardData = exercises.find(item => item.id === String(exersiseIdx))
  console.log(cardData)

  const fetchExercise = async () => {
    try {
      const response = await axios.request(options);
      setExercises(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExercise();
  }, []);
  console.log(exersiseIdx);
  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="font-bold text-center text-3xl mb-5">Exercise App</h1>
        <div className="w-3/4 mx-auto flex justify-center">
          <input
            type="text"
            className="block w-3/4 border py-1 px-2 focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Exercise"
          />
        </div>
        <hr className="my-5" />
        <div className="flex flex-wrap">
          {exercises
            .filter((item) => {
              return (
                item.name.includes(search.toLowerCase()) ||
                item.target.includes(search.toLowerCase())
              );
            })
            .map((item, idx) => {
              return (
                <ExerciseCard
                  key={`${idx}_exercise`}
                  data={item}
                  getIdx={setExerciseIdx}
                />
              );
            })}
        </div>
      </div>
      {exersiseIdx !== 0 ? (
        <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center bg-[#0000001a] backdrop-blur-sm">
          <div className="w-3/5 bg-[#f0f1fd] py-5 px-5 rounded flex relative">
            <span className="absolute top-3 right-5 cursor-pointer font-bold text-xl" onClick={()=> setExerciseIdx(0)}>X</span>
            <div className="w-2/5">
              <img
                src={cardData.gifUrl}
                className="rounded h-full w-full object-contain bg-white"
                alt=""
              />
            </div>
            <div className="w-3/5 pl-5">
              <h2 className="font-bold text-2xl text-[#df9308] capitalize">
                {cardData.name}
              </h2>
              <span className="block font-bold my-2 text-[#464646] capitalize">
                For {cardData.bodyPart} (Main)
              </span>
              <div className="flex gap-x-2">
              <span className="block font-bold text-m text-[#464646] text-nowrap">Secondary Muscles :</span>
              <div className="flex items-center flex-wrap gap-2">
                {
                  cardData.secondaryMuscles.map((item, idx)=>{
                    return <span key={`${idx}_secondaryMus`} className="block px-2 py-1 rounded-full text-xs bg-[#df9308] capitalize">{item}</span>
                  })
                }
              </div>
            </div>
              <ol className="list-decimal pl-5">
                {
                  cardData.instructions.map((item,idx) => {
                    return <li key={`${idx}_list`} className="my-1">{item}</li>
                  })
                }
                
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;

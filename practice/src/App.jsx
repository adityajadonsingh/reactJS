import { useEffect, useState } from 'react'
import './App.css'
import Counter from './Counter'
import Name from './Name';
import axios from 'axios';

function App() {
  let [count, setCounter] = useState(0);
  let [name, setName] = useState("");


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data);
      }catch(error){
        console.log(error.response.data);
      }
    }
    fetchData();
  },[])

  return (
    <>
      <Counter count={count} setCounter={setCounter}/>
      <br />
      <Name name={name} setName={setName}/>
    </>
  )
}

export default App

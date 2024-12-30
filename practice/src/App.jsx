import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Name from './Name';

function App() {
  let [count, setCounter] = useState(0);
  let [name, setName] = useState("");
  return (
    <>
      <Counter count={count} setCounter={setCounter}/>
      <br />
      <Name name={name} setName={setName}/>
    </>
  )
}

export default App

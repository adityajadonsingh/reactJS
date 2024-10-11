

import "./App.css";
import Header from "./header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import Panel from "./Panel";
import { useState } from "react"
const App = () => {
  
  const [expandId, setExpandId] = useState(1);
  const handleButton = (id) => {
    console.log("object")
    setExpandId(id);
  }

  
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(console.error)

  return ( 
    <div>

      <Counter/>
      <div className="accordian">
        <Panel id={1} expandedId={expandId} handleButton={handleButton}/>
        <Panel id={2} expandedId={expandId} handleButton={handleButton}/>
        <Panel id={3} expandedId={expandId} handleButton={handleButton}/>
      </div>
      <Header/>
      <Content/>
      <Footer/>

    </div>
  );
};

export default App;

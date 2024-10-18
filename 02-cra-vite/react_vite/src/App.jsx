import "./App.css";
import Header from "./header";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import Panel from "./Panel";
import Child from "./child";
import { useState } from "react";
const App = () => {
  console.log("parent");
  const [expandId, setExpandId] = useState(1);
  const handleButton = (id) => {
    setExpandId(id);
  };
  const counter = useState(0);
  const increaseValue = () => {
    counter[1](counter[0] + 1);
  };
  const decreaseValue = () => {
    counter[1](counter[0] - 1);
  };

  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch(console.error);

  return (
    <div>
      {/* <Counter/> */}
      <Child counter={counter[0]} />
      <div>
        <button onClick={increaseValue}>+</button>
        <h1>{counter[0]}</h1>
        <button onClick={decreaseValue}>-</button>
      </div>
      <div className="accordian">
        <Panel id={1} expandedId={expandId} handleButton={handleButton} />
        <Panel id={2} expandedId={expandId} handleButton={handleButton} />
        <Panel id={3} expandedId={expandId} handleButton={handleButton} />
      </div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;

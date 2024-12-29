import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import ListItem from './components/ListItem'

function App() {
  const [listItem, setList] = useState([]);
  const [addItem, setItem] = useState("");

  const submitItem = (e) => {
    e.preventDefault();
    setList((prevList) => [
      ...prevList,
      { item: addItem, isChecked: false }
    ]);
    setItem(""); 
  };

  useEffect(() => {
    const savedList = localStorage.getItem("list");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    if (listItem.length > 0) {
      localStorage.setItem("list", JSON.stringify(listItem));
    }
  }, [listItem]); 

  return (
    <>
      <div className="container mx-auto pt-20 flex items-center w-100 flex-col gap-y-8">
        <InputBox submit={submitItem} itemName={addItem} itemFunc={setItem} />
        <ListItem listItem={listItem} setList={setList} />
      </div>
    </>
  );
}

export default App;

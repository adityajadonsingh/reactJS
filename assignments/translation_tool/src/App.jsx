import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [getList, setList] = useState([]);
  const [getUserInput, setUserInput] = useState("");
  const [fromLanguage, setFromLanguage] = useState("auto"); 
  const [toLanguage, setToLanguage] = useState("auto"); 
  const [clickBtn, setBtn] = useState(false); 
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const languageList = async () => { 
      const options = {
        method: "GET",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages",
        headers: {
          "x-rapidapi-key":
            "4334a506bfmshb930ce8a4f5fae0p12ed91jsn8a673be94331",
          "x-rapidapi-host": "google-translate113.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setList(response.data); // Set available languages
      } catch (error) {
        console.error(error);
      }
    };
    languageList();
  }, []);

  useEffect(() => {
    const postData = async () => {
      const options = {
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        headers: {
          "x-rapidapi-key":
            "4334a506bfmshb930ce8a4f5fae0p12ed91jsn8a673be94331",
          "x-rapidapi-host": "google-translate113.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          from: fromLanguage,
          to: toLanguage, 
          text: getUserInput, 
        },
      };

      try {
        const response = await axios.request(options);
        setTranslatedText(response.data.trans);
      } catch (error) {
        console.error(error);
      }
    };

    if (clickBtn && getUserInput !== "") {
      postData();
      setBtn(false);
    }
  }, [clickBtn]);

  return (
    <>
      <h1 className="text-center mb-10 font-bold">Translation App</h1>
      <div className="container mx-auto flex justify-center flex-col gap-y-5 items-center">
        <div className="w-full">
          <textarea
            className="w-full h-32 p-5 rounded outline-none"
            id=""
            placeholder="Enter Your Text Here ..."
            value={getUserInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className="inputs flex justify-between w-full items-center">
          <div className="w-full flex items-center">
            <label className="whitespace-nowrap font-bold text-xl" htmlFor="">
              Translate From:
            </label>
            <select
              className="mx-3 bg-blue-900 py-2 px-6 rounded"
              value={fromLanguage}
              onChange={(e) => setFromLanguage(e.target.value)}
            >
              {getList.map((item, idx) => {
                return (
                  <option key={idx + "getLanguage"} value={item.code}>
                    {item.language}
                  </option>
                );
              })}
            </select>
            <label className="whitespace-nowrap font-bold text-xl" htmlFor="">
              Translate To:
            </label>
            <select
              className="mx-3 bg-blue-900 py-2 px-6 rounded"
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
            >
              {getList.map((item, idx) => {
                return (
                  <option key={idx + "getLanguage"} value={item.code}>
                    {item.language}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-2/5">
            <button onClick={() => setBtn(true)} className="w-full">
              Translate
            </button>
          </div>
        </div>
        {translatedText && (
          <div className="mt-5">
            <h2 className="text-center font-bold">Translated Text:</h2>
            <p className="text-center mt-10">{translatedText}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
 
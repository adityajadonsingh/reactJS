import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [getImg, setGetImg] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Function to get images from Unsplash API
  const getImages = async () => {
    setLoading(true);

    const para = {
      client_id: "iKiBW1NTSmnA_zwoK6rTz6fyttYH9JTeNI5vs_fbqnE", 
      count: 30,
    };

    try {
      const data = await axios.get("https://api.unsplash.com/photos/random", {
        params: para,
      });
      setGetImg((prev) => [...prev, ...data.data]); 
    } catch (error) {
      console.error("Error fetching images", error);
    } finally {
      setLoading(false); 
    }
  };

  // Infinite scroll handler
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    
    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  useEffect(() => {
    getImages(); 
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="mb-5 text-center text-4xl font-bold">Infinite Images</h1>
        <hr />
        <div className="flex mt-8 flex-wrap justify-center gap-5">
          {getImg.map((item, idx) => (
            <div key={idx} className="img-box w-52 h-auto">
              <img
                className="w-full h-full"
                src={item.urls.raw}
                alt={item.alt_description || `Image ${idx}`}
              />
            </div>
          ))}
        </div>
        {loading && <p className="text-center mt-5">Loading more images...</p>}
      </div>
    </>
  );
}

export default App;

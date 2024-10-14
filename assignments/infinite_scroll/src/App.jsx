import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const getImages = async () => {
    const para = {
      Authorization: "A92eIIWL_cMI7dJ4T7hYjAN2Hu7AINnqkAHvVYtrO3I"
    }
    const data = await axios.get("https://api.unsplash.com/photos/random/",{
      params : para
    })
    console.log(data)
  }
  getImages();
  return (
    <>
      <div className="container mx-auto">
        <h1 className='mb-5 text-center text-4xl font-bold'>Infinte Images</h1>
        <hr />

      </div>
    </>
  )
}

export default App

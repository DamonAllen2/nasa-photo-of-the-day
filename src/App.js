import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoOfTheDay from "./components/PhotoOfTheDay";

function App() {
  
const [data, setData] = useState(); 


useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
 .then(res => {
  console.log(res.data);   
  setData(res.data);
  })
  .catch(err => console.error(err))
}, [])

  return (
    <div className="App">
      { data && <PhotoOfTheDay data={data} /> }
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
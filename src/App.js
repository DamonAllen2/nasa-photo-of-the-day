import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoOfTheDay from "./components/PhotoOfTheDay";
import styled from 'styled-components'

const AppDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`

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
    <AppDiv>
      { data && <PhotoOfTheDay data={data} /> }
    </AppDiv>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
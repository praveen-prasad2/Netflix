import React from 'react'
import Navbar from './Navbar'
import '../Stylesheets/Home.css'
import Featured from './Featured/Featured'
import List from './List/List'
import { useState,useEffect } from 'react'
import { actionurl,horrorurl,animationurl,adventureurl } from "../API/API_KEY";
import axios from 'axios'


function Home(movie) {

  const [banner, setBanner] = useState({});

  async function fetchBanner() {
    const response = await axios.get(actionurl);
    setBanner(response.data.results[0]);
    console.log(response);
  }
  useEffect(() => {
    fetchBanner(), []});

  return (
  <div className="background">
    <div className="home" style={{background:`url(https://image.tmdb.org/t/p/original${banner.backdrop_path})`,
    backgroundSize:'cover'}}>
        <Navbar />
        
          <Featured />
      <List title="Action Movies" url={actionurl}/>
      <List title="Horror Movies" url={horrorurl}/>
      <List title="Animation Movies" url={animationurl}/>
      <List title="Adventure Movies" url={adventureurl}/>
    </div>
  </div>
  )
}

export default Home
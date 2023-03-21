import React from 'react'
import Navbar from './Navbar'
import '../Stylesheets/Home.css'
import Featured from './Featured/Featured'
import List from './List/List'

function Home() {
  return (
  <div className="background">
    <div className="home">
        <Navbar />
        
          <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  </div>
  )
}

export default Home
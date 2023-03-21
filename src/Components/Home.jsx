import React from 'react'
import Navbar from './Navbar'
import '../Stylesheets/Home.css'
import Featured from './Featured/Featured'
import List from './List/List'

function Home() {
  return (
    <div className="home">
        <Navbar />
        
          <Featured />
      <List />
    </div>
  )
}

export default Home
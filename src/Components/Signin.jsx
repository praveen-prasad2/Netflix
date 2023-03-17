import React from 'react'
import '../Stylesheets/Signin.css'
import { useNavigate } from 'react-router-dom'



function Signin() {
   
  return (
    <>

    <div className="wrapper">
        <div className="form">
        <div className="formdata">
            <h1>Signin</h1>
            <input type="email" name="" id="email" />
            <input type="password" name="" id="password" />
            <button className='sign'>Signin</button>
            <input type="checkbox" name="" id="" /><label htmlFor="checkbox">Rememeber me</label>
        </div>
        </div>
    </div>
    </>
  )
}

export default Signin
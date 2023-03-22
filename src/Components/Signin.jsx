import React from 'react'
import '../Stylesheets/Signin.css'
import { useNavigate } from 'react-router-dom'




function Signin() {
   
  return (
    <>
<div className="background">
    <div className="wrapper">
    <div className="image">
                    <img id='logo' src="/images/logo.png"  alt="logo" />
      </div>
        <div className="form">
        <div className="formdata">
            <h1 className='heading'>Signin</h1>
            <input  className='input' type="email" name="" id="email" />
            <input className='input pass' type="password" name="" id="password" />
            <button className='sign'>Signin</button>
           <div className="options">
              <div className='checkbox'>
                <input type="checkbox" name="" id="" /><label htmlFor="checkbox">Rememeber me</label>
              </div>
                <a href="" className='needhelp'>Need help?</a></div>
            </div>
       
       
        </div>
    </div>
    </div>    
    </>
  )
}

export default Signin
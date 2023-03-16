import React from 'react'
import '../Signup.css'

function signup() {
  return (
   <>
   <div className="wrapper">
    <div className='header'>
            <div className="logo">
        <a href="#" class="logo">LOGO</a>
       </div>
       <div className="btns">

       
<select id="language">
  <option value="English">English</option>
</select>
        <button className='sign-in'>Sign in</button> 
        </div>
    </div>
<div className="contentwrap">
<div className="contentbox">
    <h1>Unlimited movies,TV shows and more.</h1>
    <p>Watch anywhere.Cancel anytime.</p>
    <p>Ready to Watch?Enter your emaill to create or restart your membership.</p>
    <input type="email" placeholder='Email address'/>
    <button>Get Started</button>
    </div>
</div>
        </div>
     </>       
  )
}

export default signup
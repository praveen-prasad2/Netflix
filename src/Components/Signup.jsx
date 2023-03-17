import React from 'react'
import '../signup.css'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <> <div className='navparent'>
            <nav>
                <div className='navbar'>

                    <img id='logo' src="\Images\logo.png"  alt="logo" />
                </div>
                <div className='english'>
                    <select name="" id="">
                        <option value="english">english</option>
                    </select>
                   <Link to='/signin'> <button className='signin'>Signin</button></Link>

                </div>
            </nav>
        </div>
            <div className='center'>
                <h1>Unlimited movies,TV shows and more.</h1>
                <h3>Watch anywhere.cancel any time.</h3>
                <h3>Ready to watch? enter to create or restart your membership.</h3>
                <div className='btncontainer'>
                    <input className='input' type="email" placeholder='Email address' />
                    <button className='btn1'>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Signup
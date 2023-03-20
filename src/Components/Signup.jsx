import React from 'react'
import '../Stylesheets/Signup.css'
import { Link } from 'react-router-dom'
import Icon from '@mui/material/Icon';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





























function Signup() {
    return (
        <> 
    <div className="vignette">
        <div className='navparent'>
            <nav>
                <div className='navbar'>
                    <div className="image">
                    <img id='logo' src="/images/logo.png"  alt="logo" />
                    </div>
                </div>
                <div className='english'>
                    <select name="" id=""className='select'>
                      <option value="english"  ><LanguageIcon /> English</option>
                    </select>
                   <Link to='/signin'> <button className='signin'>Signin</button></Link>

                </div>
            </nav>
        </div>
            <div className='center'>
                <div className="content">
                   <h1>Unlimited movies,TV shows and more.</h1>
                <h3>Watch anywhere.cancel any time.</h3>
                <h3>Ready to watch? Enter to create or restart your membership.</h3>
                <div className='btncontainer'>
                    <input className='input' type="email" placeholder='Email address' />
                    <button className='btn1'>Get Started <ArrowForwardIosIcon /></button>
                </div>
                </div>
            </div>

    </div>    
        </>
    )
}

export default Signup
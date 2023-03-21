import React from 'react'
import '../Stylesheets/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function navbar() {
  return (
    <div className="navbar">
        <div className="container">
          <div className="left">
          <img id='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"  alt="logo" />
          <span>Home</span>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
          <span>Browse by Languages</span>
          </div>
          <div className="right">
          <SearchIcon className='icon' />
          <NotificationsNoneIcon className='icon'  />
          <img id='logo' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
          <div className="profile">
           <ArrowDropDownIcon className='icon'  />
          <div className="options">
            <span><EditOutlinedIcon/> Manage Profiles</span>
            <span>Transfer Profile</span>
            <span>Account</span>
            <span>Logout</span>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default navbar
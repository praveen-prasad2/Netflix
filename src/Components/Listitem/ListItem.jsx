import React, { useState } from 'react'
import './ListItem.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

function ListItem({index}) {
    const [isHovered,setIsHovered]=useState(false)
    const trailer="https://www.youtube.com/watch?v=b9EkMc79ZSU"
  return (
   <div className="listitem" 
            style={{left:isHovered && index * 225-50 + index * 2.5}}
           onMouseEnter={()=>setIsHovered(true) }
            onMouseLeave={()=>setIsHovered(false)}>
    <img src="https://occ-0-2164-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdTaFUt74e0yoFwDZ5X9qOIKr5tOFVksI4lrbXzP7P5pMkcoa4ALj4aqAhzOopDeJiLjHxjO_zdGflZV1GZRNdNNiJegwBGeu-0Iax5BLNol0aXNBH24-BpNc9nh9pow7RVi.jpg?r=92f" alt="" />
    {isHovered && (
        <>
    <video src={trailer} autoPlay={true} loop></video>
   <div className="iteminfo">
    <div className="icons">
    <PlayArrowIcon className='icon'/>
            <AddIcon className='icon'/>
    <ThumbUpOutlinedIcon className='icon'/>
    <ThumbDownOffAltOutlinedIcon className='icon'/>
    </div>
    <div className="itemInfoTop">
        <span>1hr 30min</span>
        <span className='limit'>U/A 16+</span>
        <span>4 Seasons</span>
    </div>
    <div className="description">
    In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
    </div>
    <div className="genre">
        Thriller
    </div>
   </div></>
   )}
   </div>
  )
}

export default ListItem
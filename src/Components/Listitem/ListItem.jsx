import React from 'react'
import './ListItem.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

function ListItem() {
  return (
   <div className="listitem">
    <img src="https://occ-0-2164-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdTaFUt74e0yoFwDZ5X9qOIKr5tOFVksI4lrbXzP7P5pMkcoa4ALj4aqAhzOopDeJiLjHxjO_zdGflZV1GZRNdNNiJegwBGeu-0Iax5BLNol0aXNBH24-BpNc9nh9pow7RVi.jpg?r=92f" alt="" />
   <div className="iteminfo">
    <div className="icons">
    <PlayArrowIcon />
    <AddIcon />
    <ThumbUpOutlinedIcon />
    <ThumbDownOffAltOutlinedIcon />

    </div>
   </div>
   </div>
  )
}

export default ListItem
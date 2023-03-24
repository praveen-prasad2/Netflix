import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Featured.css'


function Featured() {
  return (
<div className="featured">
    <div className="info">
    <img src="https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcJ3yTkgoZzT3BHYJNJm37MAeyNgG3zbzbXvfY4GOejLwli-d8Ewd4rmdiOE-AMxRuZwQZbuDi8J0LbY8aci6o_P7ue6Ef_OVs3lSpipqoMM.webp?r=2eb" alt="" />
        <span className='desc'>
        Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.
        </span>
        <div className="buttons">
            <button className='play'><PlayArrowIcon/> Play</button>
            <button className="more"><InfoOutlinedIcon /> More info</button>
        </div>
    </div>
    
</div>

    )
}

export default Featured
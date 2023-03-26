import React, { useState ,useEffect} from "react";
import "./ListItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { trailerApi } from "../../API/API_KEY";
import axios from "axios";
import YouTube from "react-youtube";
import Dialog from '@mui/material/Dialog';

function ListItem({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);

  
  const [trailer,setTrailer]=useState()
  const [open,setOpen]=useState(false)
function handleClose(){
 setOpen(false)
}
  async function playTrailer() {
    const response = await axios.get(trailerApi(movie.id));
    setTrailer(response.data.results[0]);
    console.log(trailer)
    setOpen(true)
    // console.log(response);
  }

  
  return (
    <div
      className="listitem"
      style={{
        left: isHovered && index * 225 - 50 + index * 2.5,
        background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize:'cover'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <img
        src="https://occ-0-2164-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdTaFUt74e0yoFwDZ5X9qOIKr5tOFVksI4lrbXzP7P5pMkcoa4ALj4aqAhzOopDeJiLjHxjO_zdGflZV1GZRNdNNiJegwBGeu-0Iax5BLNol0aXNBH24-BpNc9nh9pow7RVi.jpg?r=92f"
        alt=""
      /> */}
      {isHovered && (
        <>
          <div className="iteminfo" onClick={playTrailer}>
            <p>{movie.title}</p>

            <div className="icons" >
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <KeyboardArrowDownIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1hr 30min</span>
              <span className="limit">U/A 16+</span>
              <span>4 Seasons</span>
            </div>

            <div className="genre">Thriller</div>
          </div>

          {trailer && 
          <Dialog open={open} onClose={handleClose}>  
        <YouTube videoId={trailer.key} /></Dialog> }
        </>

      )}
    </div>

  );
}

export default ListItem;

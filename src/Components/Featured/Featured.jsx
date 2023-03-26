import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Featured.css";

function Featured({ banner }) {
  return (
    <div className="featured">
      <div className="info">
        <h1 className="title">{banner.title}</h1>
        <span className="desc">{banner && banner.overview}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon /> Play
          </button>
          <button className="more">
            <InfoOutlinedIcon /> More info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;

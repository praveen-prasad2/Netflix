import React, { useEffect, useState } from "react";
import "./List.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../Listitem/ListItem";
import { useRef } from "react";
import axios from "axios";

function List({title,url}) {
  const [allMovie, setAllMovie] = useState();

  async function fetchMovie() {
    const response = await axios.get(url);
    setAllMovie(response.data.results);
    // console.log(response);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setslideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction == "left" && slideNumber > 0) {
      setslideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      console.log(distance);
    }
    if (direction == "right" && slideNumber < 5) {
      setslideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      console.log(distance);
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderarrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
         
          {allMovie &&
            allMovie.map((movie, key) => {
              console.log(allMovie);
              return <ListItem index={key} movie={movie} />;
            })}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderarrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default List;

import React, { useState } from 'react'
import './List.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../Listitem/ListItem';
import { useRef } from 'react';

function List() {
  const[isMoved,setIsMoved]=useState(false)
  const[slideNumber,setslideNumber]=useState(0)

  const listRef=useRef()

  const handleClick=(direction)=>{
    setIsMoved(true)
    let distance=listRef.current.getBoundingClientRect().x -50
    if(direction=="left" && slideNumber>0){
      setslideNumber(slideNumber-1)
        listRef.current.style.transform=`translateX(${230+distance}px)`
        console.log(distance);
    }
    if(direction=="right" && slideNumber<5){
      setslideNumber(slideNumber+1)
        listRef.current.style.transform=`translateX(${-230+distance}px)`
        console.log(distance);
    }
  }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosNewOutlinedIcon className='sliderarrow left' onClick={()=>handleClick("left")} style={{display:!isMoved && "none"}}/>
          <div className="container" ref={listRef}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <ArrowForwardIosOutlinedIcon className='sliderarrow right' onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default List
import React from 'react'
import './author.css'
import CanvansLine from './mycanvas'

export default function Author(props){
  return (
    <div className={"author"}>  
      {/* <Mycanvas></Mycanvas> */}
      <CanvansLine></CanvansLine>
      <div className="author_box">
        <div className="bg"></div>
        <img src={props.author_img} alt=""/>
      </div>
    </div>
  )
}



import React from 'react'

import './base.css'

export default function Base(props){
  return (      
    <div className="base">
      <div className="base_box">
        <h1>{props.title}</h1>
        <div className="content">
          <div className="left">
            {props.base.map((ele,index)=>{
          return (
            <p key={index}><span>{ ele.baseKey + ':' }</span> <span> { ele.baseValue }</span></p>
          )
        })}
          </div>
        </div>
      </div>
    </div>
  )
}


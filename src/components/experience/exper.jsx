import React from 'react'
import './exper.css'

export default function Exper(props){


  return(
    <div className="exper">
      <div className="exper_box">
        <h1>{props.demoTitle}</h1>
        <ul>
          {props.demos.map((ele,index)=>{
            return(
              <li key={index}>
                <a href={ele.link}> <span>{ele.name}</span> </a>
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

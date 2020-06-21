import React from 'react'
import './skill.css'

export default function Skill(props){
  return (<div className="skill">
    <div className="skill_box">
      <h1>{props.skillTitle}</h1>
      <div className="content">
        {props.skills.map((ele,index)=>{
          return (
            <p key={ index }>{(index+1) + '. ' +ele.content}</p>
          )
        })}
      </div>
    </div>
  </div>)
}

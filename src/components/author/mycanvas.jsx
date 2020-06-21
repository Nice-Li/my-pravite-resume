import React, {useEffect, useRef} from 'react'

const myRandom = (min, max)=>{
  return Math.floor(((Math.random()-0.5)*2*(max-min))) + (min + 1);
}
const myCanvas = (ctx, x, z)=>{
  ctx.clearRect(0,0,x,200)
  for(z;z<=x;z+=6){
    var y = myRandom(0, 5)
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(52, 146, 88, 0.6)';
    ctx.moveTo(z,90)
    ctx.lineTo(z+3,y+90)
    ctx.lineTo(z+6,90) 
    ctx.stroke()
  }
}


export default function CanvansLine(){
  const canvansRef = useRef()
  const myRender = () => {
    var x = document.documentElement.clientWidth;
    var z = 0;
    // var canvasid = document.getElementById('canvasid')   
    // var ctx = canvasid.getContext('2d')
    var ctx = canvansRef.current.getContext('2d')
    canvansRef.current.width = x;
    canvansRef.current.height = 200;
    myCanvas(ctx,x,z)
    setTimeout(()=>{
      myRender()
    },3000)
  }
  useEffect(()=>{
    myRender()
  })
  return(
    <canvas id="canvasid"  ref={canvansRef}></canvas>
  )
}



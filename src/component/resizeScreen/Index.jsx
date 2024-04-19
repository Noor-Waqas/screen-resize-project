import React, { useEffect, useState } from 'react'

const Index = () => {
  const [screenwidth,setScreenwidth] = useState(window.screen.width)
  const actualWidth = () =>{
    setScreenwidth(window.innerWidth)
  }
  
  useEffect(()=>{
    console.log("Add Event");
   window.addEventListener("resize",actualWidth)

   return ()=>{
    // agr hum koi event bar bar used krhy hai wo memory me store ho jata hai one by one
    // us memory ko cleanup krny k liye cleanUp funcation used krty hai ta k application stack na hoooo
    // in useeffect me bydefault cleanup funcation milta hai 
    console.log("Remove Event");
    window.removeEventListener("resize",actualWidth)
   }
  })
  return (
    <div>{screenwidth}</div>
  )
}

export default Index
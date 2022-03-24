import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button> 
            <button className='button'>My List</button>       
            </div>
<h1 className='discription'>Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax</h1>
        </div>
      
    </div>
  )
}

export default Banner
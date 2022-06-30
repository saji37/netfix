import {API_KEY,imgUrl} from '../../../constrants/constants'
import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import "./Banner.css"
function Banner() {
  const [movie, setMovie]= useState() 
useEffect(() => {

axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
  console.log(Response.data.results)
  setMovie(Response.data.results[0])
//})
})
}, [])
  return (
    //movie.map((obj)=>
    <div 
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title : ""}</h1>
            <div className='banner_buttons'>
            <button className='button'>Play</button> 
            <button className='button'>My List</button>       
            </div>
<h1 className='discription'>{movie ? movie.overview : ""}</h1>
        </div>
    <div className="fade_bottom"></div>
    </div>
  )
  //)
}
export default Banner

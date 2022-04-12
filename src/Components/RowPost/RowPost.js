import React,{useEffect,useState} from 'react'
import { API_KEY,imgUrl } from '../../constrants/constants'
import './RowPost.css';
import axios from '../../axios'
function RowPost() {
  const [movies,setMovies]= useState([])
  useEffect(()=> {
axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((Response)=>{
  console.log(Response.data)
  setMovies(Response.data.results)
})
//.catch(err=>{
 // alert('Network Error')
//})
  }, [])
  return (
    <div className="row">
      <h2>Netflix Originals</h2>
    <div className='posters'>
      {movies.map((obj)=>
      <img className='poster' alt='poster' src={`${imgUrl+obj.backdrop_path}`}/>
      )}
    </div>
    </div>
  )
}

export default RowPost

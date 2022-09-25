import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import baseaxios from '../../axios'
import {API_KEY,imageurl} from '../../Constants/Constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    baseaxios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{ 
      setInterval(()=>{
        let x = Math.floor((Math.random() * 14) + 1);
        setMovie( response.data.results[x])}
          
        , 10000)
    },[]) 
  })


  
  
  
  return (
    <div style={{backgroundImage:`url(${movie ? imageurl+movie.backdrop_path:''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
                <h1 className='discription'>{movie?movie.overview:''} </h1>
                
            </div>
           
          
        </div>
        <div className="fade_bottom"></div>
        
        
        </div>
  )
}

export default Banner
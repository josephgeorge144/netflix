import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { baseURL, API_KEY,imageurl,ytlink } from "../../Constants/Constants";
import ReactPlayer from 'react-player'


function RowPost(props) {
  const [post, setPost] = useState([])
  const[ytmovie,setYtmovie]=useState('')
  useEffect(() => {
    axios.get(props.genre).then((response)=>{
      setPost(response.data.results)
       
    })
  }, 
  []);
   const handleClick=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
      let ytkey=response.data.results[0].key
      setYtmovie(`https://www.youtube.com/watch?v=${ytkey}`)
      
      
      }

    })
  
    
 }
 

  

  return (
    <>
    <div className="row">
        
     
      <h2>{props.title}</h2>
      <div className="posters">
        {post.map((itm,ky)=>{

          let imagepath=itm.poster_path;
           

          return(
            <img 
            src={`${imageurl+imagepath}`}
            className={props.isSmall ? "smallposter":'poster'} alt="poster image"
            onClick={()=>handleClick(itm.id)}
          />

          
            
          )
          


        })
           
        }
         
      
      </div>
      
      
      
    </div>
    <ReactPlayer width='100' url={ytmovie}></ReactPlayer>
    </>
  );
}

export default RowPost;

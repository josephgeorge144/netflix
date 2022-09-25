import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { baseURL, API_KEY,imageurl } from "../../Constants/Constants";


function RowPost(props) {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios.get(props.genre).then((response)=>{
      setPost(response.data.results)
      
    })
  }, 
  []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {post.map((itm,ky)=>{

          let imagepath=itm.poster_path
          return(
            <img
           src={`${imageurl+imagepath}`}
           className={props.isSmall ? "smallposter":'poster'} alt="poster image"
         />
          )


        })
           
        }
       
      
      </div>
    </div>
  );
}

export default RowPost;

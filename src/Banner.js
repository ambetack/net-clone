import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] =useState([]);



    useEffect(() => {

        async function fetchData() {

            const request = await axios . get(requests.fetchNetflixOriginals);
            console.log (request.data.results);
            Math.floor(Math.random()*request.data.results.length-1)

        


        }
        fetchData();
        
    }, []);
    console.log(movie);
   // function truncate(str,n) {
     //   return str?.length >n? str.substr(0,n-1) +"..." : str;
    }//
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            ba9ckgroundImage: `url(
                "https://image.tmdb.org/t/p/originals/${movie?.backdrop_path}"
            )`,
            backgroundPosition: " center center",
        }}
        >
            <div className=" banner_contents">
                {/* title */}
                <h1> 
               <div classsName="banner_title" >{movie?.title || movie ?.name || movie?.original_name}</div>
                    <div className ="banner_buttons">
                        <button className =" banner_button">Play</button>
                        <button className=" banner_button">My List </button>
                        </div>
                        <h1 className ="banner_description"></h1>
                        {movie?.overview}
                        

                    
                //</h1>//
            </div>
            <h1 className =" banner_description"> 
            {truncated(movie?.overview,150)}
            </h1>
            
    

        <div className="banner-fadebotton"/>
         {/* <<<< background image */}
            {/*title*/}
            {/* div > 2 buttons */}
            {/* descriptions */}
        </header>
    )


export default Banner;

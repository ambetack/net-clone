import React,{useState,useEffect} from 'react';
import './App.css';
import axios from './axios';
import './Row.css';

const base_url="https://image.tmdb.org/t/p/originals";

function Row ({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    // a snippet of code which run on a specific condition variable.
    useEffect(() => {
        
        async function fetchData() {
            const request =  await axios.get(fetchUrl);
            // "https:// api.themoviedb.org/3"
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    }, [fetchUrl]);

    console.log[movies];

    return (
        <div className="row">
            <h2> {title} </h2>

              {/* container -> posters */}
              <div className={'row_poster ${isLargeRow && "row_posterLargeRow"}'}>
                {/*  several row_posters */}
                {movies.map(movie =>{
                    <img 
                    key={movie.id}
                    className="row_posters"
                    
                    src={movie.poster_path } alt={movie.name}/>
                } )}
            </div>

            
        </div>
    )
}

export default Row;

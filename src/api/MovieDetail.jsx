import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

    const id = useParams().id
    const [movie, setmovie] = useState({});

    const getMovieDetail = async() => {
        console.log(id)
        const res = await axios.get(`http://www.omdbapi.com/?apikey=3962d14a &i=${id}`)
        console.log(res.data)
        setmovie(res.data)
    }

    useEffect(() => {
        getMovieDetail();
    },[])

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Movie details</h1>
            <div style={{border:'1px solid black' , padding:'10px', margin:'20px'}}>
                <div style={{backgroundColor:'lightblue', textDecoration:'underline'}}>
                    <h1>{movie.Title}</h1>
                </div>
                <div style={{height:'auto', width:'400px', display:'flex'}}>
                    <img src={movie.Poster} alt={movie.Title} style={{width:'100%', objectFit:'cover', borderRadius:'15px'}}/>
                </div>
                <br /><br />
                <div style={{ backgroundColor:'lightgreen', fontWeight:'bold'}}>
                    <div style={{marginLeft:'15px'}}>
                        <p></p><hr />
                        <p>YEAR : {movie.Year}</p><hr />
                        <p>RATED : {movie.Rated}</p><hr />
                        <p>RELEASED : {movie.Released}</p><hr />
                        <p>RUNTIME : {movie.Runtime}</p><hr />
                        <p>ACTORS : {movie.Actors}</p><hr />
                        <p>AWARDS : {movie.Awards}</p><hr />
                        <p>BOXOFFICE : {movie.BoxOffice}</p><hr />
                        <p>COUNTRY : {movie.Country}</p><hr />
                        <p>DIRECTOR : {movie.Director}</p><hr />
                        <p>LANGUAGE : {movie.Language}</p><hr />
                        <p>PLOT : {movie.Plot}</p><hr />
                        <p>TYPE : {movie.Type}</p><hr />
                        <p>RESPONSE : {movie.Response}</p><hr />
                        <p>WRITER : {movie.Writer}</p><hr />
                        <p>IMDBRATING : {movie.imdbRating}</p><hr />
                        <p>IMDBVOTES : {movie.imdbVotes}</p><hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
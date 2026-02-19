import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import App from '../App'

export const OmdbMovie = () => {

    const [movies, setmovies] = useState([])
    const [movieName, setmovieName] = useState('')
    const navigate = useNavigate()
    const searchMovie = async() => {
        if(!movieName) {
            alert("plese enter the movie name")
            return
        }
        const response = await axios.get(`http://www.omdbapi.com/?apikey=3962d14a&s=${movieName}`)
        if (response.data.Response === 'True'){
            setmovies(response.data.Search)
        }else {
            setmovies([])
            alert('movie not found')
        }
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>OMDB Movies </h1>
        <input type="text" placeholder='Enter Movie name' value={movieName} onChange={(e)=>setmovieName(e.target.value)}/>
        <button onClick={()=>{searchMovie()}}>SEARCH</button>
        <div style={{display:'grid',gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap:'20px', padding:'30px'}}>
            {
                movies.map((movie)=>{
                    return <div key={movie.imdbID} style={{border: '1px solid black', padding:'15px', borderRadius:'10px',width:'100%',height:'100%'}}>
                        <h4>ID : </h4>
                        <p>{movie.imdbID}</p>
                        <div>
                            <img src={movie.Poster} alt={movie.Title} style={{height:'250px', width:'150px'}}/>
                        </div>
                        <h4>{movie.Title}</h4>
                        <p>{movie.Year}</p>
                        <button onClick={()=>navigate(`/movie/${movie.imdbID}`)}>DETAILS</button>
                    </div>
                })
            }
            <div>
                
            </div>
        </div>
    </div>
  )
}

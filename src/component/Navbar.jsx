import React from "react";
import { Link } from 'react-router-dom'

 export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
            <a class="navbar-brand " style={{color:"#aa262d", fontFamily:"sans-serif"}} href="#">Netflix</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/netflixhome"> Home <span class="sr-only"></span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/netflixshow">TV Shows</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/netflixmovies">Movies</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/netflixKids">Kids</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/netflixDrama">Drama</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/netflixSeries">Series</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Team">Team</Link>
                    </li>
                                        
                </ul>
               
            </div>
        </nav>
    )
}
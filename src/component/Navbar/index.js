import React from 'react';
import requests from '../../dataRequest/requests';
import classes from './Navbar.module.css';

const navList = [
    {
        id: 1,
        name: "Trending",
        endpoint: requests.fetchTrending
    },
    {
        id: 2,
        name: "Top Rated",
        endpoint: requests.fetchTopRated
    },
    {
        id: 3,
        name: "Action",
        endpoint: requests.fetchActionMovies
    },
    {
        id: 4,
        name: "Comedy",
        endpoint: requests.fetchComedyMovies
    },
    {
        id: 5,
        name: "Horror",
        endpoint: requests.fetchHorrorMovies
    },
    {
        id: 6,
        name: "Romance",
        endpoint: requests.fetchRomance
    },
    {
        id: 7,
        name: "Mystery",
        endpoint: requests.fetchMystery
    },
    {
        id: 8,
        name: "Sci-fi",
        endpoint: requests.fetchSciFi
    },
    {
        id: 9,
        name: "Western",
        endpoint: requests.fetchWestern
    },
    {
        id: 10,
        name: "Animation",
        endpoint: requests.fetchAnimation
    },
    {
        id: 11,
        name: "TV Movies",
        endpoint: requests.fetchTv
    },
]

// npm i react-flip-move for animated display

function Navbar({ setSelectedOption }) {
    const movieGenreHandler = (genre) => {
        setSelectedOption(genre)
    }

    return (
        <div className={classes.navBar}>
            {navList.map(({ id, endpoint, name }) => (
                <h2
                    onClick={() => movieGenreHandler(endpoint)}
                    key={id}
                >
                    {name}
                </h2>
            ))}
        </div>
    )
}

export default Navbar

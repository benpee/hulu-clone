import React, { useEffect, useState } from 'react';
import axios from '../../dataRequest/axios';
// import requests from '../../dataRequest/requests';
import VideoCard from '../../ui';
import classes from './Result.module.css';
// npm i react-flip-move
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(selectedOption);
                setMovies(request.data.results)
                return request;
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData()
    }, [selectedOption])
    return (
        <div className={classes.result}>
            <FlipMove >
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results

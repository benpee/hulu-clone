import React, { forwardRef } from 'react';
import classes from './VideoCard.module.css';
// npm i react-text-truncate
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from "@material-ui/icons"

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
    const truncate = (str, i) => str.length > i ? str.substr(0, i) + '...' : str;
    return (
        <div className={classes.videoCard} ref={ref}>
            <img src={`${base_url}${movie.backdrop_path || movie.poaster__path}`} alt={`${movie.title} poster`} />
            <p>{truncate(movie.overview)}</p>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                // textTruncateChild={<a href="#">Read on</a>} // to add read more 
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}</h2>
            <p className={classes.videoCard__stats}>
                {movie.media_type && `${movie.media_type} *`}
                {movie.release_date || movie.first_air_date} *
                <ThumbUpSharp /> {" "}
                {movie.lvote_count}</p>
        </div>
    )
});

export default VideoCard

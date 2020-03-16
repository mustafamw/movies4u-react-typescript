import React from 'react';
import './Movie.scss';
import { MovieProps } from '../../../interfaces/props/MovieProps';
import { Configs } from "../../../config/Config";
import placeholder from '../../../assets/img/errorPlaceholder.png';
import { Link } from "react-router-dom";

class Movie extends React.Component<MovieProps>{

  render() {
    const movie = this.props.result;

    let movie_title;
    if (movie?.title) {
      movie_title = movie.title;
    } else if (movie?.original_title) {
      movie_title = movie?.original_title
    }

    let vote_avergae;
    if (movie?.vote_average && movie.vote_average > 0) {
      vote_avergae = <div className="vote-average" >{movie.vote_average}</div>
    }

    return (
      <li className="grid-item movie" >
        <Link to={`/movie/${movie?.id}`}>
          <div className="image-container">
            <img alt={movie_title}
              src={`${Configs.imgUrlWidth500}/${movie?.backdrop_path}`}
              onError={(e: React.ChangeEvent<HTMLImageElement>) => { e.target.srcset = placeholder }} />
            {vote_avergae}
          </div>
          <div className="title-container">
            {movie_title}
          </div>
        </Link>
      </li>
    );
  }
}

export default Movie;

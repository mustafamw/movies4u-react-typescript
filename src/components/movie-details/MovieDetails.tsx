import React from "react";
import { MovieDbInterface } from "../../interfaces/movieDb/MovieDbInterface";
import { Configs } from "../../config/Config";
import placeholder from '../../assets/img/errorPlaceholder.png';
import moment from 'moment';
import './MovieDetails.scss';

class MovieDetails extends React.Component<MovieDbInterface> {

    render() {

        const movie = this.props;

        let movie_title;
        if (movie?.title) {
            movie_title = movie.title;
        } else if (movie?.original_title) {
            movie_title = movie.title;
        }

        if (movie_title) {
            document.title = movie_title;
        }

        let genre = movie?.genres?.map((e, index) => {
            return (<li key={index}>{e.name}</li>);
        });

        let genres;
        if (genre && genre.length > 0) {
            genres = <div className="genres">
                <h3>Genres:</h3>
                <ul className="tags">
                    {genre}
                </ul>
            </div>;
        }

        let vote_avergae;
        if (movie?.vote_average && movie?.vote_average > 0) {
            vote_avergae = <div className="vote-average" >{movie?.vote_average}</div>;
        }

        let productions = movie?.production_companies?.map((e, index) => {
            if(e.logo_path) {
                return (<li key={index} className="grid-item">
                    <img srcSet={`${Configs.imgUrlWidth500}/${e.logo_path}`}
                        alt={e.name}
                        onError={(e: any) => { e.target.srcset = placeholder }} />
                </li>);
            }
        });

        let production_companies;
        if (productions && productions.length > 0) {
            production_companies = <ul className="production_companies">
                {productions}
            </ul>;
        }

        let home_page;
        if (movie?.homepage) {
            home_page = <a href={movie.homepage} target="blank" className="link">Homepage</a>;
        }

        let overview;
        if (movie?.overview && movie?.overview.length > 0) {
            overview = <div>
                <h3>Overview:</h3>
                <p className="overview">
                    {movie?.overview}
                </p>
            </div>;
        }

        let release_date;
        if (movie?.release_date) {
            release_date = moment(movie.release_date, 'YYYY-MM--DD').format('DD/MM/YYYY');
            release_date = <div className="release_date">
                <h3>Release date:</h3>
                <p className="date">
                    {release_date}
                </p>
            </div>

        }

        return (
            <div className="movie-details">
                <div className="grid-container-40-60">
                    <div className="grid-item info-left">
                        <img srcSet={`${Configs.imgUrlWidth500}/${movie.backdrop_path}`}
                            alt={movie_title}
                            onError={(e: any) => { e.target.srcset = placeholder }} />
                        {production_companies}
                        {vote_avergae}
                    </div>

                    <div className="grid-item info-right">
                        <h1>{movie_title}</h1>
                        {overview}
                        {genres}
                        {release_date}
                        {home_page}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;
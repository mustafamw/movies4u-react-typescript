import React from "react";
import { MoviesDbService } from "../../services/moviesDb/MovieDbService";
import { MovieDbInterface } from "../../interfaces/movieDb/MovieDbInterface";

import { Redirect } from "react-router-dom";
import './MoviePage.scss';
import loading from '../../assets/img/loading.gif';
import MovieDetails from "../../components/movie-details/MovieDetails";

class MoviePage extends React.Component<any, MovieDbInterface> {

    private moviesDbService: MoviesDbService = new MoviesDbService();

    private getListId = (id: number) => {
        this.setState({ loading: true })
        this.moviesDbService.getListId(id)
            .then((respone: MovieDbInterface) => {
                this.setState(respone)
                this.setState({ loading: false })
                if (!respone.status_code) {
                    this.setState({ loaded: true })
                }
            })
    }

    componentDidMount = () => {
        const id = window.location.pathname.split('/')[2];
        this.getListId(parseInt(id));
    }

    goBack() {
        window.history.back();
    }

    render() {

        const movie = this.state;

        if (movie?.status_code) {
            return (<Redirect to="/" push={true} />);
        }

        return (
            <div className="movie-page">
                <div className="back">
                    <button onClick={this.goBack}>
                        <i className="fa fa-chevron-left"></i> Back
                    </button>
                </div>
                {movie?.loading ? <img src={loading} className="loading" alt="Loading..." /> : null}
                {movie?.loaded ? <MovieDetails {...movie} /> : null}
            </div>
        );
    }
}

export default MoviePage;
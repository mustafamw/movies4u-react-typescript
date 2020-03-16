import React from 'react';
import './Movies.scss';
import { MoviesProps } from '../../interfaces/props/MoviesProps';
import Movie from './movie/Movie';

class Movies extends React.Component<MoviesProps>{

  render() {

    const results = this.props.result?.map((e, index) => {
      return (<Movie result={e} key={index}></Movie>);
    })

    return (
      <div className="movies">
        <ul className="grid-container-25">
          {results}
        </ul>
      </div>
    );
  }
}

export default Movies;

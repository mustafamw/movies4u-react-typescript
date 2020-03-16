import React from 'react';
import './NoResultsFound.scss';
import noResults from '../../assets/img/no_result.gif';

class NoResultsFound extends React.Component{
  
  render(){

    return (
      <div className="no-results-found">
        <img alt="no results" srcSet={noResults}/>
      </div>
    );
  }
}

export default NoResultsFound;

import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  
  render(){

    return (
      <header>
        <div className="container">
          <Link to='/'>
            <h1>MOVIES 4U</h1>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;

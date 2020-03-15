import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../components/header/Header';
import Routers from '../routers/Routers';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="container">
            <Routers />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/search/:criteria" 
        component={({ match }) => (<SearchResults criteria={match} />)}/>
    </Router>
  );
}

export default App;

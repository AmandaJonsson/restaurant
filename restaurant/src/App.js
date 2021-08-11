import React from 'react';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/book' component={Book} />

      </Switch>
    </Router>
  );
}

export default App;

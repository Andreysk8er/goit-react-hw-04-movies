import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import NavHead from '../Nav/NavHead';
import MoviesPage from '../Pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../Pages/MovieDetailsPage/MovieDetailsPage';
import rout from '../../Services/rout';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavHead />
      <Switch>
        <Route exact path={rout.HOME} component={HomePage} />
        <Route path={rout.MOVIESID} component={MovieDetailsPage} />
        <Route path={rout.MOVIES} component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

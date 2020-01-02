import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import rout from '../../../Services/rout';
import PopularityPage from '../PopularityPage/PopularityPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

export class header extends Component {
  static = { listPopularly: [] };

  render() {
    return (
      <div className="container">
        <div>
          <BrowserRouter>
            <Route exact path={rout.HOME} component={PopularityPage} />
            <Route path={rout.MOVIESID} component={MovieDetailsPage} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default header;

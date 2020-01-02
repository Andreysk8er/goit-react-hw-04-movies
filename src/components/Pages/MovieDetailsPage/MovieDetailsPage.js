import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import rout from '../../../Services/rout';
import apiServices from '../../../Services/api';
import DetailsPage from '../DetailsPage/DetailsPage';
import styles from './MovieDetailsPage.module.css';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

// import ReviewsNavigation from '../../ReviewsNavigation/ReviewsNavigation';

const mainNavigation = [styles.mainNavigation];
const ulMenu = [styles.ulMenu];
const liMenu = [styles.liMenu];

export default class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const ShowId = this.props.match.params.movieId;

    apiServices.fetchShowDetails(ShowId).then(movie => {
      this.setState({ movie });
    });
  };

  onBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push(rout.MOVIES);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h2>movie Details</h2>

        <button type="button" onClick={this.onBack}>
          <span>Go to back</span>
        </button>

        {movie && <DetailsPage movie={movie} match={match} />}

        <nav className={mainNavigation}>
          <h4>Additional information</h4>
          <ul className={ulMenu}>
            <li className={liMenu}>
              <Link to={`${match.url}/cast`}>Cast</Link>
            </li>
            <li className={liMenu}>
              <Link to={`${match.url}/reviews`}>Raviews</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={rout.CAST} component={Cast} />
          <Route path={rout.REVIEWS} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

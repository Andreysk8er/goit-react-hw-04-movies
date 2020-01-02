import React, { Component } from 'react';
import url from '../../../Services/static';
import styles from './DetailsPage.module.css';

const wrapper = [styles.wrapper];
const imgWrap = [styles.imgWrap];
const detailsWrap = [styles.detailsWrap];
const liWrap = [styles.liWrap];
const ulWrapper = [styles.ulWrapper];

export default class DetailsPage extends Component {
  state = {};

  render() {
    const { movie } = this.props;
    const { match } = this.props;
    return (
      <div className={wrapper}>
        <div className={imgWrap}>
          <img src={`${url.PHOTO}${movie.poster_path}`} alt={movie.title} />
        </div>
        <div key={match.params.movieId} className={detailsWrap}>
          <h3>{movie.title}</h3>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul key={match.params.movieId} className={ulWrapper}>
            {movie.genres.map(elem => (
              <li key={match.params.movieId} className={liWrap}>
                {elem.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

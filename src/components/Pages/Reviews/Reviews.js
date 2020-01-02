import React, { Component } from 'react';
import api from '../../../Services/api';

export default class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const moveId = this.props.match.params.movieId;
    api.fetchShowReview(moveId).then(reviews => {
      this.setState({ reviews });
    });
  };

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length === 0 ? (
          <div>Don't have any reviews.</div>
        ) : (
          <div>
            <ul>
              {reviews.map(elem => (
                <li key={elem.id}>
                  <h4>{elem.author}</h4>
                  <span>{elem.content}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

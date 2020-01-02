import React, { Component } from 'react';
import api from '../../../Services/api';
import url from '../../../Services/static';

export default class ShowCast extends Component {
  state = { cast: null };

  componentDidMount() {
    this.fetchCast();
  }

  fetchCast = () => {
    const { movieId } = this.props.match.params;

    api.fetchShowCreditsActor(movieId).then(cast => {
      this.setState({ cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        {cast && (
          <ul>
            {cast.map(elem => (
              <li key={elem.credit_id}>
                {elem.profile_path && (
                  <div>
                    <img
                      src={`${url.PHOTO}${elem.profile_path}`}
                      alt={elem.name}
                    />
                  </div>
                )}
                <p>{elem.name}</p>
                <p>Character: {elem.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rout from '../../../Services/rout';
import apiServices from '../../../Services/api';

export default class PopularityPage extends Component {
  state = { listPopularly: [] };

  componentDidMount() {
    apiServices.fetchShowPopularityMovie().then(listPopularly => {
      this.setState({ listPopularly });
    });
  }

  render() {
    const { listPopularly } = this.state;
    return (
      <div>
        <h2>Show movie</h2>
        <ul>
          {listPopularly.map(elem => (
            <li key={elem.id}>
              <Link
                to={{
                  pathname: `${rout.MOVIES}/${elem.id}`,
                  state: { from: this.props.location },
                }}
              >
                {elem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

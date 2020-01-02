import React, { Component } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import SearchBar from '../../SearchBar/SearchBar';
import api from '../../../Services/api';

export default class MoviesPage extends Component {
  state = {
    Movie: [],
  };

  _isMounted = false;

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');

    if (!query) {
      return;
    }
    api.fetchShowWithQuery(query).then(Movie => {
      this.setState({ Movie });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );
    if (prevQuery === nextQuery) {
      return;
    }

    api.fetchShowWithQuery(nextQuery).then(Movie => {
      this.setState({ Movie });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setSearchQuery = searchQuery => {
    if (searchQuery === '') {
      toast.warn('Введите значение', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return;
    }
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { match } = this.props;
    const { Movie } = this.state;
    return (
      <div>
        <h2>Show movie</h2>
        <SearchBar onSearch={this.setSearchQuery} />
        <ToastContainer autoClose={2500} transition={Zoom} />
        <ul>
          {Movie.map(elem => (
            <li key={elem.id}>
              <Link
                to={{
                  pathname: `${match.url}/${elem.id}`,
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

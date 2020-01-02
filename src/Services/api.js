const fetchShowDetails = ShowId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${ShowId}?api_key=831582b809025e0d8161e68d01f9ecca`,
  ).then(res => res.json());
};

const fetchShowWithQuery = searchQuery => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=831582b809025e0d8161e68d01f9ecca&query=${searchQuery}`,
  ).then(res =>
    res.json().then(data => {
      const { results } = data;
      return results;
    }),
  );
};

const fetchShowPopularityMovie = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie/?api_key=831582b809025e0d8161e68d01f9ecca&sort_by=popularity.desc`,
  ).then(res =>
    res.json().then(data => {
      const { results } = data;
      return results;
    }),
  );
};

const fetchShowReview = ShowId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${ShowId}/reviews?api_key=831582b809025e0d8161e68d01f9ecca&language=en-US&page=1`,
  ).then(res =>
    res.json().then(data => {
      const { results } = data;
      return results;
    }),
  );
};

const fetchShowCreditsActor = ShowId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${ShowId}/credits?api_key=831582b809025e0d8161e68d01f9ecca`,
  ).then(res =>
    res.json().then(data => {
      const { cast } = data;
      return cast;
    }),
  );
};

export default {
  fetchShowDetails,
  fetchShowWithQuery,
  fetchShowPopularityMovie,
  fetchShowCreditsActor,
  fetchShowReview,
};

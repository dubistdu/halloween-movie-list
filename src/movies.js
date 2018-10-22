import React, { Component } from 'react';
import Movie from './movie.js';
// import movies from './movie-data.json';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {movies: []}
  }

  // When this component appears on the HTML
  componentDidMount() {
    //  get the value from the input field and request that data be fetched by
    // after fetching make json obj
    const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1991&sort_by=popularity.desc&api_key=`${API_Key}`'
    )
    .then(response => response.json())
    .then(({results: movies}) => this.setState({movies}))
    }


  render() {
    let movies = this.state.movies
    return (
      <div className= "movieList">
        {movies.sort((a, b) => {
              if (a.release_date < b.release_date) {
                return -1;
              } else if (a.release_date > b.release_date) {
                return 1;
              } else {
                return 0;
              }
            })
            .map((movie, index) => {
              return (
                <Movie
                  title={movie.title}
                  rating={movie.vote_average}
                  poster_path={movie.poster_path}
                  overview={movie.overview.slice(0,100) + " ... (more)"}
                  release_date={movie.release_date}
                  key={index}
                />
              );
            })
          };
        </div>
      );
    }
  }
export default MovieList;

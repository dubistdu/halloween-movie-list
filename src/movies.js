import React, { Component } from 'react';
import Movie from './movie.js';
import movies from './movie-data.json';

class MovieList extends Component {
  render() {
    return (
      <div className= "movieList">
        {movies.results
            .sort((a, b) => {
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
          }
        </div>
      );
    }
  }

export default MovieList;

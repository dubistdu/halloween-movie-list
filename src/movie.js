import React, { Component } from 'react';
// js library for date format
// import { isMoment } from "../node_modules/moment";

class Movie extends Component {
  render() {
    const posterUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
    return (
      <div className= "movie">
        <img src={posterUrl + this.props.poster_path} alt="Movie Poster"/>
        <ul>
          <li><strong>Title:</strong> {this.props.title}</li>
          <li><strong>Rating:</strong> {this.props.rating}</li>
          <li><strong>Release Date:</strong> {this.props.release_date}</li>
          <li><strong>Synopsis:</strong> {this.props.overview}</li>
        </ul>
      </div>
    );
  }
}

export default Movie;


// {
//   movieData.map(function(movie){
//     return (

//     );
//   })
// }

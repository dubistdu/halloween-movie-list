import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className= "movie">
        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"/>
        <ul>
          <li><strong>Title:</strong> "Indiana Jones and the Last Crusade"</li>
          <li><strong>Rating: 7.7,</strong></li>
          <li><strong>Original Language:</strong> "en"</li>
          <li><strong>Overview: </strong>
            When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life."
          </li>
        </ul>
      </div>
    );
  }
}

export default Movie;

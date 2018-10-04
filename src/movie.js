import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg"/>
        <ul>
          <li>original_title: "Indiana Jones and the Last Crusade"</li>
          <li>vote_average: 7.7,</li>
          <li>title: "Indiana Jones and the Last Crusade"</li>
          <li>original_language: "en",</li>
          <li>genre_ids: [12, 28]</li>
          <li>overview:
            When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
          </li>
        </ul>
      </div>
    );
  }
}

export default Movie;

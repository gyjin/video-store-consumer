import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMovies: [],
    };  
  }

// TODO: Instead of loading the api on mount, call it the api when you enter into 
// an input box. Or click a button. Pass the value into the api.
  apiCall (query) {
    const searchAddress = 'http://localhost:3000/movies?query=';
    axios.get(searchAddress + `${query}`)
      .then((response) => {
          this.setState({
          allMovies: response.data,
        });
      })
      .catch((error) => {
      this.setState({error: error.message})});
  }

  makeSearchCollection () {
    const searchCollection = this.state.allMovies.map((movie, i) => {
      return <div className="flex-item" key={i}> <strong>{movie.title}</strong>
          <img src={movie.image_url} alt="movie"></img>
          {/* <p>Id: {movie.id}</p> */}
          <p>{movie.overview}</p>
          <p className="release-date">Release Date: {movie.release_date}</p>    

{/*once button is clicked, selection is put inside Library from API external */}
      <button onClick={() => this.props.addMovieToLibraryCallback(movie)}>Add this movie to library</button>
      </div>;
    }
    );
    return searchCollection;
  }

  getMoviesCallback() {
    this.apiCall(this.props.searchTerm);
  }

  render() {
    return (
      <section>

        <div class="input-group mb-3">
          <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Search for Movie here" 
            aria-label="Search for Movie here" 
            onChange={(event) => { this.props.searchChangeCallback(event.target.value) }}
            value={this.props.searchTerm}
            name="search"
            />
          <div class="input-group-append">
            <button 
                className="btn btn-search" 
                type="button" 
                onClick={this.getMoviesCallback.bind(this)}>Search</button>
          </div>
        </div>

      <strong>Search Results: </strong>
      <div className="flex-container wrap">
      {this.makeSearchCollection()}
      </div>
      </section>
    );
  }
}

Search.propTypes = {
  searchChangeCallback: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  addMovieToLibraryCallback: PropTypes.func.isRequired,
};

export default Search;
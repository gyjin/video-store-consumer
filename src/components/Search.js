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
    axios.get('http://localhost:3000/movies?query=' + `${query}`)
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
      return <div key={i}> <h1>{movie.title}</h1>
          <img src={movie.image_url}></img>
          <p>Id: {movie.id}</p>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>    

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
      
        <div>
          <label className="search--label" htmlFor="search">Search For Movies</label>
        </div>
        <input
          onChange={(event) => { this.props.searchChangeCallback(event.target.value) }}
          value={this.props.searchTerm}
          name="search"
          id="search"
          className="search"
        />
      <ol>
      <button onClick={this.getMoviesCallback.bind(this)}>Search for Movies</button>
      </ol>

      {this.makeSearchCollection()}
    
      </section>
    );
  }
}

Search.propTypes = {
  searchChangeCallback: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Search;
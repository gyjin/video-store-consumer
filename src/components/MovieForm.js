import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieForm.css'

class MovieForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularity: '',
      vote_count: '',
      video: '',
      poster_path: [],
      id: '',
      adult: '',
      backdrop_path: '',
      original_language: '',
      original_title: ''
    };
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {

event.preventDefault();

  if (this.state.name && this.state.species) {
    this.props.addPetCallback({
            popularity: this.state.popularity,
            vote_count: this.state.vote_count,
            video: this.state.video,
            poster_path: this.state.poster_path,
            id: this.state.id,
            adult: this.state.adult,
            backdrop_path: this.state.backdrop_path,
            original_language: this.state.original_language,
            original_title: this.state.original_title
    });

    this.setState({
      popularity: '',
      vote_count: '',
      video: '',
      poster_path: [],
      id: '',
      adult: '',
      backdrop_path: '',
      original_language: '',
      original_title: '',
    });
  }
}

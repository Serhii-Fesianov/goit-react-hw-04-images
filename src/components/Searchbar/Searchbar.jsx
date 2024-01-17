import React, { Component } from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChangeEvent = event => {
    const query = event.target.value;
    this.setState({ query });
  };

  handleFindEvent = event => {
    event.preventDefault();
    const { query } = this.state;
    this.props.handleGetQuery(query);
    this.setState({ query: '' });
    event.target.reset();
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleFindEvent}>
          <button type="submit" className={s.searchFormButton}>
            Search
          </button>
          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            required
            autoFocus
            onChange={this.handleChangeEvent}
          />
        </form>
      </header>
    );
  }
}

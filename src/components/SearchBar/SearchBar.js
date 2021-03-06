import React, { Component } from "react";
import PropType from "prop-types";
import styles from "./SearchBar.module.css";

export default class SearchBar extends Component {
  static propType = {
    onSubmit: PropType.func
  };

  state = {
    inputValue: ""
  };

  handleChange = e =>
    this.setState({
      inputValue: e.target.value
    });

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            value={this.state.inputValue}
            onChange={this.handleChange}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

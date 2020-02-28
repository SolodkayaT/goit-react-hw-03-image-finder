import React, { Component } from "react";
import styles from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "react-loader-spinner";
import Notification from "../Notification/Notification";
import imagesApi from "../../services/imagesApi";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    this.fetchImages("cat");
  }

  fetchImages = query => {
    imagesApi
      .fetchImagesWithQuery(query)
      .then(images => this.setState({ images }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <section className={styles.App}>
        <SearchBar onSubmit={this.fetchImages} />
        {error && <Notification message={error.message} />}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 ? <ImageGallery images={images} /> : null}
      </section>
    );
  }
}

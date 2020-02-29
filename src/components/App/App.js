import React, { Component } from "react";
import styles from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "react-loader-spinner";
import Notification from "../Notification/Notification";
import Button from "../Button/Button";
import imagesApi from "../../services/imagesApi";
import Modal from "../Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    searchQuery: "",
    page: 1,
    showModal: false,
    largeImageUrl: null
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages(nextQuery);
    }
    if (prevState.images.length !== this.state.images.length) {
      this.imagesScroll();
    }
  }

  imagesScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  fetchImages = () => {
    this.setState({
      isLoading: true
    });
    imagesApi
      .fetchImagesWithQuery(this.state.searchQuery, this.state.page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState({
      largeImageUrl: null
    });
  };

  handleShowImage = url => {
    this.setState({
      largeImageUrl: url
    });
  };

  render() {
    const { images, isLoading, error, largeImageUrl } = this.state;

    return (
      <section className={styles.App}>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        {error && <Notification message={error.message} />}
        {images.length > 0 && (
          <ImageGallery images={images} showLargeImage={this.handleShowImage} />
        )}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && !isLoading && (
          <Button text="Load more" onClickButton={this.fetchImages} />
        )}
        {largeImageUrl && (
          <Modal onClose={this.toggleModal}>
            <img src={this.largeImageUrl} alt="" />
          </Modal>
        )}
      </section>
    );
  }
}

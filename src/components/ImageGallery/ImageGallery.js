import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;

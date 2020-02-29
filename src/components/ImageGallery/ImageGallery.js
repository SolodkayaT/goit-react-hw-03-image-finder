import React from "react";
import PropType from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, showLargeImage }) => (
  <ul className={styles.ImageGallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        showImage={url => showLargeImage(url)}
      />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.PropType = {
  images: PropType.array
};
ImageGallery.defaultProps = {
  images: []
};

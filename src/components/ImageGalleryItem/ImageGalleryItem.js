import React from "react";
import PropType from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, showImage }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      className={styles.ImageGalleryItemImage}
      src={webformatURL}
      alt={tags}
      data-src={largeImageURL}
      onClick={e => showImage(e.target.dataset.src)}
    />
  </li>
);

export default ImageGalleryItem;
ImageGalleryItem.propType = {
  webformatURL: PropType.string,
  tags: PropType.string,
  largeImageURL: PropType.string
};

ImageGalleryItem.defaultProps = {
  webformatURL: "",
  tags: "picture",
  largeImageURL: ""
};

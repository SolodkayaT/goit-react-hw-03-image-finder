import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      className={styles.ImageGalleryItemImage}
      src={webformatURL}
      alt={tags}
      data-src={largeImageURL}
    />
  </li>
);

export default ImageGalleryItem;

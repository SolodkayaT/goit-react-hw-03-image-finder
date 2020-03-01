import React, { Component, createRef } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === this.backdropRef.current) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

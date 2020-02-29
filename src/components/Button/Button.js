import React from "react";
import PropType from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, onClickButton }) => (
  <button className={styles.Button} type="button" onClick={onClickButton}>
    {text}
  </button>
);

export default Button;

Button.propType = {
  text: PropType.string,
  onClickButton: PropType.func
};

Button.defaultProps = {
  text: "Click me"
};

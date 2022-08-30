import React from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export const BurgerButton = ({ isOpen, ...rest }) => (
  <FontAwesomeIcon
    {...rest}
    className={`burger_button ${isOpen ? 'burger_button-active' : 'burger_button-no-active'}`}
    icon={!isOpen ? faBars : faXmark}
  />
);

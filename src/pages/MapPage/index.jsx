import "./styles.scss";
import image from "../../../src/assets/img/weekw.png"

import React from "react";
import { GoogleMaps } from "../../components/molecules/MapsGoogle";
import SocialBar from "../../components/molecules/SocialBar";

const MapPage = () => {
  return (
    <div className="container_pagemap">
      <div className="container_tittlelastpage">
        <p className="p"> ENCUENTRANOS</p>
      </div>

      <div className="container_google-map">
        <GoogleMaps />
      </div>
      <div className="container_footer">
        <div className="container_footersocial">

        <SocialBar />
        </div>
      <img className="footer-logo" src={image} alt="logo" />
        <p className="footer-number">800 343-34.34</p>
      </div>
    </div>
  );
};

export default MapPage;

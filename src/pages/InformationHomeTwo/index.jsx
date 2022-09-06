import React from "react";

import { Logos } from "../../components/atoms/Logos";
import CardPageTwo from "../../components/molecules/CardPageTwo";
import { informationLogos } from "../../components/molecules/CardPageTwo/constants";
import "./styles.scss";

const InformationHomeTwo = () => {
  return (
    <div className="container_pageinformation">
      <div className="container_card-page">
        <CardPageTwo />
        <div className="container_logos">
          {informationLogos.map((item) => (
            <Logos {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationHomeTwo;

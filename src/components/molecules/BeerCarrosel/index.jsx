import "./styles.scss";

import React from "react";
import imgmain from "../../../assets/img/Coupleofbeers.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgbeer from "../../../assets/img/Trigobeer.png";
import poker from "../../../assets/img/Pokerbeer.png";

const BeerCarrosel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <Carousel className="container_carrosel" showThumbs={false} autoPlay>
        <div>
          <img src={imgbeer} alt="" />
          <p className="legend">Club Colombia</p>
        </div>
        <div>
          <img src={imgmain}  alt=""/>
          <p className="legend">Budweiser</p>
        </div>
        <div>
          <img src={poker} alt=""/>
          <p className="legend">Poker</p>
        </div>
      </Carousel>
    </div>
  );
};

export default BeerCarrosel;

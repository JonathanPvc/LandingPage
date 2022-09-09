import React from "react";
import MobileStore from "../../atoms/MobileStore";
import SocialBar from "../SocialBar";
import "./styles.scss";

const HomeCard = () => {
  return (
    <div className="container__texthomecard">
      <h2 className="textboxone">Conoce la nueva forma de Comprar y Celebrar</h2>
      <h1 className="textboxbigletter"> DISFRUTA </h1>
      <h1 className="textboxbigletter"> EN TODO </h1>
      <h1 className="textboxbigletter"> LUGAR </h1>
      <h2 className="textboxone">DESCARGA AHORA WEEKS y empieza a  </h2>
      <h2 className="textboxone">disfrutar de tus fiestas como debe ser,</h2>
      <h2 className="textboxone"> selecciona tu producto y recibe donde estés!</h2>
      <MobileStore />    
      <SocialBar />
    </div>
  );
};

export default HomeCard;

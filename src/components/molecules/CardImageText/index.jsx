import React from "react";
import "./styles.scss";

const CardImageText = () => {
  return (
    <div className="container_card-beerpage">
      <div className="background_card"></div>

      <div className="container_textfriendsbeer">
        <p className="tittle_friendsbeer">UN PARCHE DE PURA AMISTAD</p>
        <h2 className="description_beer">
          Poker, el amigo que une a los amigos.
          <br />
          Queremos seguir promoviendo la campaña de Poker, unir a las personas
          por medio de momentos inolvidables. Disfruta de todos nuestros
          productos y destapa grandes momentos con tus amigos.
        </h2>
      </div>
    </div>
  );
};

export default CardImageText;

import React from "react";
import CardImageText from "../../components/molecules/CardImageText";
import "./styles.scss";
import logo from "../../assets/img/Trigobeer.png";
import beer from "../../assets/img/wbeer.png";
import bottle from "../../assets/img/Pokerbeer.png";
const BeerPage = () => {
  return (
    <div className="containerbeerpage">
      <div className="containerleftpage">
        <CardImageText />
      </div>
      <div className="containerrighttpage">
        <p className="title">SEMANA CERVECERA</p>

        <div className="container_itemsbeer">
          <div className="item-beer">
          <img src={bottle} alt=""/>
          <div>
            <h1>Cerveza Poker</h1>

            <h2 >Poker botella 330 ml</h2>

          </div>
          </div>
          <div className="item-beer">
          <img src={beer} alt=""/>
          <div>
            <h1>Cerveza Budweiser</h1>

            <h2>Budweiser botella 330 ml</h2>

          </div>
          </div>
          <div className="item-beer">
          <img src={logo} alt=""/>
          <div>
            <h1>Cerveza Club Colombia</h1>

            <h2>Club colombia trigo 330 ml</h2>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeerPage;

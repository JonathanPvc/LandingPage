import React from "react";
import CardImageText from "../../components/molecules/CardImageText";
import "./styles.scss"
const BeerPage = () => {
  return (
    <div className="containerbeerpage">




      <div className="containerleftpage">
      <CardImageText />
      </div>
      <div className="containerrighttpage">
 
       
        <p className="title">BEER WEEK</p>

      
      </div>
    </div>
  );
};

export default BeerPage;

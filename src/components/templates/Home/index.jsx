import React from "react";
import useScroll from "../../../hooks/useScroll";
import MainPage from "../../../pages/MainPage";
import BeerPage from "../../../pages/BeerPage"
import InformationHomeTwo from "../../../pages/InformationHomeTwo";
import OnlyBeer from "../../../pages/OnlyBeer";
import NavBar from "../../organisms/NavBar";

import "./styles.scss";
import MapPage from "../../../pages/MapPage";


const Home = () => {
  const {scrollPosition} = useScroll()
  console.log(scrollPosition)
  return (
    <>
      <div className="container_home">
        <NavBar scrollPosition={scrollPosition} />

        <MainPage />
        <InformationHomeTwo />
        <BeerPage/>
        <OnlyBeer />
        <MapPage />
      </div>
    </>
  );
};

export default Home;

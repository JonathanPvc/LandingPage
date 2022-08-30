import React from "react";
import useScroll from "../../../hooks/useScroll";
import InformationHome from "../../../pages/InformationHome";
import InformationHomeTwo from "../../../pages/InformationHomeTwo";
import NavBar from "../../organisms/NavBar";

import "./styles.scss";

const Home = () => {
  const {scrollPosition} = useScroll()
  console.log(scrollPosition)
  return (
    <>
      <div className="container_home">
        <NavBar scrollPosition={scrollPosition} />

        <InformationHome />
        <InformationHomeTwo />
      </div>
    </>
  );
};

export default Home;

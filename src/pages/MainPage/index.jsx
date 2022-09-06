import BeerCarrosel from "../../components/molecules/BeerCarrosel";
import HomeCard from "../../components/molecules/HomeCard";
import SocialBar from "../../components/molecules/SocialBar";

import "./styles.scss";

const MainPage = () => {
  return (
    <div className="container_main_page">
      <HomeCard />
      <div className="container_socialbarhome">
        <SocialBar />
      </div>
      <div className="container_carrosel">
        <BeerCarrosel />
      </div>
    </div>
  );
};

export default MainPage;

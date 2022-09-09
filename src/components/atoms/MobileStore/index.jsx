import React from "react";
import MobileStoreButton from 'react-mobile-store-button';

import "./styles.scss"

const MobileStore = () => {
  return (
    <div className="container_buttons-store"  >
      <MobileStoreButton className="button-store-app" width="180px" height="75px"
        store="ios"
        url={""}
        linkProps={{ title: "iOS Store Button" }}
      />
       <MobileStoreButton className="button-store"
        store="android"
        url={""}
        linkProps={{ title: "android Store Button" }}
      />
    </div>
  );
};

export default MobileStore;

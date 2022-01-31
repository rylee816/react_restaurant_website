import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>With a true blend of classic and contemporary, the ambiance at Gericht is unmatched. From our innovative cocktail culture that fuels a bustling bar scene, to the elegant, sophisticated dining rooms that welcome guests for business, pleasure, and special events. At Gericht, we keep the buzz alive.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;

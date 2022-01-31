import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="chef quote" />
          <p className="p__opensans quote-text">No one who cooks, cooks alone. Even at thier most solitary, a cook in the kitchen is surrounded by generations of cooks past, the advice, and menus of cooks present, the wisdom of cookbook writers. Cooking is at once child’s play and adult joy. And cooking done with care is an act of love.</p>
        </div>
        <p className="p__opensans quote-text">Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people eat together.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">
          Chef & Founder
        </p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;

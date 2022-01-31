import React from 'react';

import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam, animi, consequuntur, iusto doloremque quisquam fugit pariatur nisi veritatis blanditiis voluptatem a dignissimos deleniti eveniet.</p> 
        <button type="button" className='custom__button'>Learn More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about-knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">A Colorful Past</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam, animi, consequuntur, iusto doloremque quisquam fugit pariatur nisi veritatis blanditiis voluptatem a dignissimos deleniti eveniet.</p> 
        <button type="button" className='custom__button'>Our History</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

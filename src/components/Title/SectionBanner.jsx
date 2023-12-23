import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

const SectionBanner = ({ textt }) => (
    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className="text__all-cont">
      <h3>{textt}
      
      </h3>
      <div className="linne"></div>
      
    </ScrollAnimation>
);

export default SectionBanner
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SectionTitle = ({ text }) => (
  <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className="text__cont">
    <h2>{text}</h2>
  </ScrollAnimation>
);

export default SectionTitle;
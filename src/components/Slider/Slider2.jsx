import React from 'react';
import HomeSlider from './Slider';

import wireless01 from '../../assets/wireless-01.png';
import sofaSlide from "../../assets/hero-img.png";
import watchSlide from "../../assets/watch-07.png";
import phone08 from "../../assets/phone-08.png";

export const SliderData = [
    {
        id: 1,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: sofaSlide,
    },
    {
        id: 3,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: wireless01,
    },
    {
        id: 4,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: watchSlide,
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: phone08,
  }
  ];
function Slider2() {
  return (
    <HomeSlider Sdata={SliderData}/>
  )
}

export default Slider2
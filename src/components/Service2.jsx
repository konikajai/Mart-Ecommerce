import React from 'react'
import { car, card, shieldHalfOutline, headset } from 'ionicons/icons';

import Services from './Service';

export const serviceData = [
    {
      icon: car,
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: card,
      title: "Safe Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: shieldHalfOutline,
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: headset,
      title: " Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ];

function Service2() {
  return (
    <Services  serviceData={serviceData}/>
  )
}

export default Service2
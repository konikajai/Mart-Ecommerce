import React from 'react'
import Slider2 from './slider/Slider2';
import Service2 from './services/Service2';
import BigDiscount2 from './bigdiscount/BigDiscount2';
import NewArrivals2 from './newarrivals/NewArrivals2';
import BestSales2 from './bestsales/BestSales2';
import Footer from './footer/Footer';

function HomePage() {
  return (
    <>
      <Slider2 />
      <Service2/>
      <BigDiscount2 />
      <NewArrivals2 />
      <BestSales2 />
      <Footer />
    </>
  )
}

export default HomePage
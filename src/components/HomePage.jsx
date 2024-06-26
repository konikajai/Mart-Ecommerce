import React from 'react'
import Slider2 from './Slider/Slider2';
import Service2 from './Services/Service2';
import BigDiscount2 from './BigDiscount/BigDiscount2';
import NewArrivals2 from './NewArrivals/NewArrivals2';
import BestSales2 from './BestSales/BestSales2';
import Footer from './Footer/Footer';



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
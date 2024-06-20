import React from 'react'
import HomeSlider from '../Slider/Slider';
import Feature from '../Features/Feature';
import Discount from '../Discount/Discount';
import NewArrivals from '../NewArrivals/NewArrivals';
import BestSales from '../BestSales/BestSales';
import Footer from '../Footer/Footer';


function HomePage() {
  return (
    <>
      <HomeSlider />
      <Feature />
      <Discount />
      <NewArrivals />
      <BestSales />
      <Footer />
    </>
  )
}

export default HomePage
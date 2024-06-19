import Nav from './components/NavBar/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/NavBar/HomePage';
import ShopPage from './components/NavBar/ShopPage';
import CartPage from './components/NavBar/CartPage';
import HomeSlider from './components/Slider/Slider';
import Feature from './components/Features/Feature';
import Discount from './components/Discount/Discount';
import NewArrivals from './components/NewArrivals/NewArrivals';
import BestSales from './components/BestSales/BestSales';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='/Shop' element={ShopPage}/>
        <Route path='/Cart' element={CartPage}/>
      </Routes>
      </BrowserRouter>
      <HomeSlider/>
      <Feature/>
      <Discount/>
      <NewArrivals/>
      <BestSales/>
      <Footer/>
    </div>
  );
}

export default App;

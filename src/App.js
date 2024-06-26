import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from '../src/components/HomePage'
import ShopPage from '../src/components/ShopPage'
import CartPage from '../src/components/CartPage'
import NoPage from '../src/components/NoPage'
import DisplayProducts from './components/DisplayProducts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/*' element={<NoPage/>}/>
        <Route path='/Products' element={<DisplayProducts/>}/>
        <Route path='/Products/:id' element={<DisplayProducts/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

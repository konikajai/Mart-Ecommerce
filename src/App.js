import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/NavBar/HomePage';
import ShopPage from './components/NavBar/ShopPage';
import CartPage from './components/NavBar/CartPage';
import NoPage from './components/NavBar/NoPage';

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
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

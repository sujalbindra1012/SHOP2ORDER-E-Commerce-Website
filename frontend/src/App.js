
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import grocery_banner from './Components/Assets/grocery_banner.jpg';
import chilled_banner from './Components/Assets/chilled_banner.webp';
import drinks_banner from './Components/Assets/drinks_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/grocery' element={<ShopCategory banner={grocery_banner} category="grocery"/>}/>
        <Route path='/chilled' element={<ShopCategory banner={chilled_banner} category="chilled"/>}/>
        <Route path='/drinks' element={<ShopCategory banner={drinks_banner} category="drinks"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>  
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

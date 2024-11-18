
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Boutique from './Pages/Boutique';
import BoutiqueCategory from './Pages/BoutiqueCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import Kid_banner from './components/Assets/banner_kids.png';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Boutique/>}/>
      <Route path='/hommes' element={<BoutiqueCategory banner={men_banner} category="hommes"/>}/>
      <Route path='/femmes' element={<BoutiqueCategory banner={women_banner} category="femmes"/>}/>
      <Route path='/enfants' element={<BoutiqueCategory banner={Kid_banner} category="enfants"/>}/>
      <Route path="/product" element= {<Product/>}/>
      <Route path=':productId' element= {<Product/>}>
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

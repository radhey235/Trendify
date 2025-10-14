import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Order from './pages/Order.jsx';
import Product from './pages/Product.jsx';
import Collection from './pages/Collection.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { ShopProvider } from './context/ShopContext'; // or ProductContext
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ShopProvider>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/order' element={<Order />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/collection' element={<Collection />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </ShopProvider>
  );
}

export default App;

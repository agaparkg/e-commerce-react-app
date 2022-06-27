import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      {/* side-bar */}
      <SideBar />
      {/* cart */}
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products'>
          <Route path='' element={<Products />} />
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

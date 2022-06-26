import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Hero from './components/Hero';
import Home from './components/Home';
import Loading from './components/Loading';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App'>
      {/* page loading */}
      <Loading isLoading={isLoading} />

      {/* home page */}
      <Home />

      {/* navbar */}
      {/* <NavBar /> */}

      {/* hero */}
      <Hero />

      {/* sidebar */}
      <SideBar />

      {/* cart */}
      <Cart />

      {/* products */}
      <Products />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Products from './components/Products';
import SideBar from './components/SideBar';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App'>
      {/* page loading */}
      <Loading isLoading={isLoading} />

      {/* navbar */}
      <NavBar />

      {/* hero */}
      <Hero />

      {/* sidebar */}
      <SideBar />

      {/* cart */}
      <Cart />

      {/* products */}
      <Products />
    </div>
  );
}

export default App;

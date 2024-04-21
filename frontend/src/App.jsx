import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeholder from './pages/placeholder/Placeholder'
const App = () => {
  return (
    <div className="max-w-[1100px] mx-auto px-3">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeholder/>}/>
      </Routes>
    </div>
  );
};

export default App;

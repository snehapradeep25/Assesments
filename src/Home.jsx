import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
  };

  return (
    <>
     
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Welcome to Our Store!</h1>
          <p className="home-subheading">Discover the best products just for you.</p>
          <button className="shop-now-button" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </div>
   
    </>
  );
}

export default Home;

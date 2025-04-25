import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles.css';

function Marketplace() {
  return (
    <div>
      <Navbar/>
      <div className='dashboard-container'>
        <div className="content">
          <h1>Legal Marketplace</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Marketplace;

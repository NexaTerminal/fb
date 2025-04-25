import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles.css';

function LegalAI() {
  return (
    <div className='dashboard-container'>
        <Navbar/>
        <div className='content'>
            <h1>Legal AI Assistant</h1>
        </div>
        <Footer />
    </div>
  );
}

export default LegalAI;
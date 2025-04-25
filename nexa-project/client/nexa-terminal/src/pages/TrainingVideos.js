import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles.css';

function TrainingVideos() {
  return (
    <div className='dashboard-container'>
        <Navbar />
        <div className="content">
          <h1>Training Videos</h1>
        </div>
        <Footer />
    </div>
  );
}

export default TrainingVideos;
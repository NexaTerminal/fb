import React from 'react';
import '../styles.css';
import Hero from '../components/Hero';
import BlogPreview from '../components/BlogPreview';

function Home() {
  return (
    <div className='container'>
      <Hero />
      <h1>Welcome to NeXa</h1>
      <h2>Connecting businesses to lawyers</h2>
      <BlogPreview /><BlogPreview /><BlogPreview />

    </div>
  );
}

export default Home;
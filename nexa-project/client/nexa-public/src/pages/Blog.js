import React from 'react';
import BlogPreview from '../components/BlogPreview';
import '../styles.css';

function Blog() {
  return (
    <div className='container'>
      <h1>NeXa Blog</h1>
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />
      <BlogPreview />

    </div>
  );
}

export default Blog;
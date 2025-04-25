import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

function Navbar() {
  return (
    <div className="container">
      <h1>NeXa Public</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}
export default Navbar;
export default Navbar;
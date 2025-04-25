import React from 'react';
import '../styles.css';

function Signup() {    
  return (
    <div className='container'>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <input type="password" id="password" name="password" required />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

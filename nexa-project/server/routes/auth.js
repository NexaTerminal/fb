const express = require('express');
const router = express.Router();
const { createUser, findUserByEmail } = require('../models/user');

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

    const userCreated = await createUser(email, password);

    if (userCreated.success) {
        res.status(201).json({ message: 'User created successfully' });
    }else if(userCreated.message === 'User already exists'){
        return res.status(409).json({ message: 'User with this email already exists' });
    } else{
        res.status(500).json({ message: 'User creation failed' });
    }

  } catch (error) {
    console.error('Signup error:', error.message);
    if (error.message.includes('duplicate key error')) {
        return res.status(409).json({ message: 'User with this email already exists' });
      }
    res.status(500).json({ message: 'Signup error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const userFound = await findUserByEmail(email, password);

    if (userFound.success) {
        res.status(200).json({ message: 'User login success'});
    } else if (userFound.message === 'User not found') {
        return res.status(401).json({ message: 'User not found'});
    } else if (userFound.message === 'Invalid password') {
        return res.status(401).json({ message: 'Invalid password'});
    } else {
        return res.status(500).json({ message: 'Login error' });
    }
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Login error' });
  }
});

module.exports = router;
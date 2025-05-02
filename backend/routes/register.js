const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST /api/register
router.post('/', async (req, res) => {
  try {
    const { name, email, teamName, gameId } = req.body;
    if (!name || !email || !gameId) {
      return res.status(400).json({ error: 'Name, email, and gameId are required' });
    }
    const registration = new Registration({ name, email, teamName, gameId });
    await registration.save();

    // TODO: Send receipt email (mock for now)

    res.status(201).json({ message: 'Registration successful', registrationId: registration._id });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

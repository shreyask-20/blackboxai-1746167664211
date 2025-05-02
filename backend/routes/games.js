const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const Order = require('../models/Order');

// GET /api/games - list all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/games/purchase - purchase a game
router.post('/purchase', async (req, res) => {
  try {
    const { userEmail, gameId } = req.body;
    if (!userEmail || !gameId) {
      return res.status(400).json({ error: 'userEmail and gameId are required' });
    }
    const game = await Game.findById(gameId);
    if (!game || !game.available) {
      return res.status(404).json({ error: 'Game not available' });
    }
    const order = new Order({
      userEmail,
      gameId,
      type: 'purchase',
      amount: game.price,
    });
    await order.save();
    res.status(201).json({ message: 'Game purchased successfully', orderId: order._id });
  } catch (error) {
    console.error('Purchase error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/games/return - return a game
router.post('/return', async (req, res) => {
  try {
    const { userEmail, gameId } = req.body;
    if (!userEmail || !gameId) {
      return res.status(400).json({ error: 'userEmail and gameId are required' });
    }
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    const order = new Order({
      userEmail,
      gameId,
      type: 'return',
      amount: -game.price,
    });
    await order.save();
    res.status(201).json({ message: 'Game returned successfully', orderId: order._id });
  } catch (error) {
    console.error('Return error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

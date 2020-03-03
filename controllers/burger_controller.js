const router = require('express').Router()
const { getBurgers, devourBurger, addBurger } = require('../models/burger')

// GET all items
router.get('/api/burger', (req, res) => getBurgers(items => res.json(items)))

// POST an item
router.post('/api/burger', (req, res) => addBurger(req.body, _ => res.sendStatus(200)))

// PUT an item
router.put('/api/burger/:id', (req, res) => devourBurger(req.params.id, _ => res.sendStatus(200)))

// DELETE an item
// router.delete('/api/burger/:id', (req, res) => deleteItem(req.params.id, _ => res.sendStatus(200)))

module.exports = router

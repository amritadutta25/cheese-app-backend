const express = require('express')
const Cheese = require('../models/cheese')

const router = express.Router()

// get route
router.get('/', async(req, res) => {
    try {
        res.json(await Cheese.find({}))

    }catch(err){
        res.status(400).json(err)
    }
})

// post route to create new 
router.post('/', async (req, res) => {
    try {
        res.json(await Cheese.create(req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

// delete route
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

// show route
router.get('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err)
    }
})

// Update route
router.put('/:id', async (req, res) => {
    try {
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router
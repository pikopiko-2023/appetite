import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const restaurants = await db.getRestaurants()
    res.render('index', { restaurants: restaurants })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router

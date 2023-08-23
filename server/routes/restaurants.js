import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const restaurantId = parseInt(req.params.id)
    const restaurant = await db.getRestaurant(restaurantId)
    res.render('restaurant', restaurant)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router

// * For testing only - to display all data from restaurants table
// router.get('/', async (req, res) => {
//   try {
//     const restaurants = await db.getRestaurants()
//     res.render('restaurant', { restaurants: restaurants })
//   } catch (err) {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   }
// })

import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

// /restaurants/77702/reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const reviews = await db.getReviews(id)
    console.log(reviews)
    res.render('review', {reviews})
    
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router

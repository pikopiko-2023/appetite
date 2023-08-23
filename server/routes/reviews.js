import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

// /restaurants/2/reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const id = Number(req.params.id)
    console.log(id)
    const reviews = await db.getReviews(id)

    console.log(reviews)
    //   const users = await db.getUsers()
    res.render('review', reviews)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router

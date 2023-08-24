import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    console.log(users)
    res.render('usersList', { users: users })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

//changed to add reviews by user
router.get('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id)
    const user = await db.getUser(userId)
    const reviews = await db.getReviewsByUser(userId)
    res.render('user', { user: user, reviews: reviews })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router

// * For testing only - to display all data from users table
// router.get('/', async (req, res) => {
//   try {
//     const users = await db.getUsers()
//     res.render('user', { users: users })
//   } catch (err) {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   }
// })

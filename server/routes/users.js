import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id)
    const user = await db.getUser(userId)
    res.render('user', user)
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

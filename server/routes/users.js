import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/users/:id', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.render('users', { users: users })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

export default router

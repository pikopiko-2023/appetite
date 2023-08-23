import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

// /restaurants/77702/reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const reviews = await db.getReviews(id)
    const restaurant = await db.getRestaurant(id)

    const viewReviews = {
      restaurant: restaurant,
      reviews: reviews,
    }

    res.render('review', { viewReviews })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// /restaurants/77702/addReview
router.get('/:id/addReview', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const restaurant = await db.getRestaurant(id)
    res.render('addReview', { restaurant: restaurant })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

// /restaurants/77702/addReview
router.post('/:id/addReview', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, email, rating, review } = req.body
    const allReviews = await db.getAllReviews()
    const userId = await findUserId(name)

    const newReview = {
      id: allReviews.length + 88801,
      rating: rating,
      review: review,
      user_id: userId,
      restaurant_id: id,
    }

    const newUser = {
      id: userId,
      name: name,
      about: 'New reviewer',
      email: email,
      img: '/images/fake-user/new_user.png',
    }

    await db.addNewReview(newReview)
    await db.addUser(newUser)
    res.redirect(`reviews`)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

async function findUserId(name) {
  const users = await db.getUsers()
  const user = users.find((user) => user.name === name)

  if (user) {
    return user.id
  } else {
    return users.length + 99901
  }
}

export default router

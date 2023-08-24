import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getRestaurants() {
  return connection('restaurants').select('*')
}

export async function getRestaurant(id) {
  return connection('restaurants').where('id', id).first()
}

export async function getUsers() {
  return connection('users').select('*')
}

export async function getUser(id) {
  return connection('users').where('id', id).first()
}

export async function getReviewsByUser(userId) {
  return await connection('reviews')
    .join('restaurants', 'restaurants.id', 'reviews.restaurant_id')
    .where('reviews.user_id', userId)
    .select(
      'restaurants.img as restaurantImage',
      'restaurants.name as restaurantName',
      'reviews.rating',
      'reviews.review'
    )
}

export async function getAllReviews() {
  return await connection('reviews').select()
}

export async function getReviews(restaurant_id) {
  return await connection('reviews')
    .join('restaurants', 'restaurants.id', 'reviews.restaurant_id')
    .join('users', 'users.id', 'reviews.user_id')
    .where('restaurant_id', restaurant_id)
    .select(
      'reviews.id',
      'users.img as userImage',
      'users.name as userName',
      'users.id as userId',
      'reviews.rating',
      'reviews.review'
    )
}

export async function addNewReview(newReview) {
  return await connection('reviews').insert(newReview)
}

export async function addUser(newUser) {
  return await connection('users').insert(newUser)
}

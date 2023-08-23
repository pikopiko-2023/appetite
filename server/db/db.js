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
  return connection('users').select()
}
export async function getUser(id) {
  return connection('users').where('id', id).first()
}

export async function getReviews(restaurant_id) {
  return await connection('reviews')
    .join('restaurants','restaurants.id', 'reviews.restaurant_id')
    .join('users', 'users.id', 'reviews.user_id')
    .where('restaurant_id', restaurant_id)
    .select(
      'reviews.id',
      'restaurants.name as restaurantName',
      'restaurants.img as restaurantImage',
      'users.name as userName',
      'reviews.rating',
      'reviews.review'
    )
}

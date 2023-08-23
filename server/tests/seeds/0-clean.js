export async function seed (knex) {
  await knex('users').del()
  await knex('reviews').del()
  await knex('restaurants').del()
}

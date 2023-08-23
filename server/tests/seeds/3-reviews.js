export async function seed(knex) {
  await knex('reviews').insert([
    {
      id: 88803,
      rating: 1,
      review: 'bad customer service',
      user_id: 99903,
      restaurant_id: 77701,
    },
  ])
}

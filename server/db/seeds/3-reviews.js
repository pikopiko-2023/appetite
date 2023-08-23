export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 88801,
      rating: 3,
      review:
        'I loved the food, the service was great, the dishes were just delicious, I will recommend it.',
      user_id: 1,
      restaurant_id: 77703,
    },
    {
      id: 88802,
      rating: 5,
      review: 'This is one of my best experience of a good restaurant',
      user_id: 2,
      restaurant_id: 77704,
    },
    {
      id: 88803,
      rating: 1,
      review:
        'This restaurant has bad customer service. Owners allow in-laws to disrespect and mistreat customers while consuming.',
      user_id: 3,
      restaurant_id: 77701,
    },
    {
      id: 88804,
      rating: 2,
      review:
        'For dinner, I went there with my girlfriend. At first sight, the place was a little messy and unclean.',
      user_id: 3,
      restaurant_id: 77702,
    },
  ])
}

export async function seed(knex) {
  await knex('restaurants').insert([
    {
      id: 77701,
      name: 'Punderful Bites Cafe',
      description: 'delicious food',
      location: 'Punderland',
      food_grade: 'C',
      img: '/images/logos/punderfulBites.png',
      rating: 0,
    },
  ])
}
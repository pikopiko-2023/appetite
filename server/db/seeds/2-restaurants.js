/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('restaurants').insert([
    {
      id: 77701,
      name: 'Punderful Bites Cafe',
      description:
        'Serving up delicious food with a side of groan-worthy puns.',
      location: 'Punderland',
      food_grade: 'C',
      img: '/images/logos/punderfulBites.png',
      rating: 0,
    },
    {
      id: 77702,
      name: "Fork 'n Fiction Diner",
      description:
        'Where culinary creativity meets imaginative storytelling on your plate.',
      location: 'Library Courtyard',
      food_grade: 'B',
      img: '/images/logos/forkNFictionDiner.png',
      rating: 1,
    },
    {
      id: 77703,
      name: 'Whisker Lickers Eatery',
      description:
        'A quirky spot for both humans and their feline friends to enjoy unique dishes.',
      location: 'Cat Kingdom',
      food_grade: 'A',
      img: '/images/logos/whiskeyLickersEatery.png',
      rating: 4,
    },
    {
      id: 77704,
      name: 'Nacho Average Joint',
      description: 'Defying the ordinary with extraordinary nachos and more.',
      location: 'Mexico',
      food_grade: 'B',
      img: '/images/logos/nachoAverageJoint.png',
      rating: 5,
    },
  ])
}

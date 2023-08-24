export async function seed(knex) {
  await knex('users').insert([
    {
      id: 99903,
      name: 'Po',
      about: "Po's favourite food is noodles",
      email: 'popopo@users.net',
      img: '/images/fake-user/Po.png',
    },
  ])
}

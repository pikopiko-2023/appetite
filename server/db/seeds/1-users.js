export async function seed(knex) {
  await knex('users').insert([
    {
      id: 99901,
      name: 'Anton Ego',
      about:
        "Anton Ego is a cutthroat food critic who was made infamous for his scathing reviews and cold exterior. Despite his generally negative criticism, Ego is the most acclaimed food connoisseur in Paris. Ego is extremely passionate about food, claiming, \"I don't like food, I love it\", and claims to refuse to swallow food that he doesn't like, which explains why he's so thin.",
      email: 'anton.ego@users.net',
    },
    {
      id: 99902,
      name: 'Gordon Ramsay',
      about:
        "Gordon Ramsey is a British celebrity chef, restaurateur, television presenter, and writer. His restaurant group, Gordon Ramsay Restaurants, was founded in 1997 and has been awarded 17 Michelin stars overall; it currently holds a total of seven. Gordon's reviews are so brutally honest, even the vegetables start crying in the kitchen!",
      email: 'gordo@users.net',
    },
    {
      id: 99903,
      name: 'Po',
      about:
        "Po's favourite food is noodles, and he's known for his huge appetite. Before becoming the Dragon Warrior, Po worked at his father's noodle shop and dreams of being a kung fu master. \"Imagine a dish that's the Picasso of the culinary world – each bite a delightful surprise, flavours doing the cha-cha, and shrimp that moonwalk across your plate. 'Flavour Fusion Fantasia' isn't just a meal; it's a front-row ticket to a culinary circus!",
      email: 'popopo@users.net',
    },
  ])
}

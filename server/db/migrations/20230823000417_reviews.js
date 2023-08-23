export async function up(knex) {
  await knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.string('rating')
    table.string('review')
    table.string('user_id')
    table.string('restaurant_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('reviews')
}

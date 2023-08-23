export async function up(knex) {
  await knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary()
    table.integer('rating')
    table.string('review')
    table.integer('user_id')
    table.integer('restaurant_id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('reviews')
}

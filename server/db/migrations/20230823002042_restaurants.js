/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('restaurants', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('location')
    table.string('food_grade')
    table.integer('rating')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable('restaurants')
}

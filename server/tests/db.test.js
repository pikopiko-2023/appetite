import { test, expect, beforeEach, beforeAll, afterAll } from 'vitest'

import * as db from '../db/db.js'

let testDb = null

beforeAll(async () => {
  await db.connection.migrate.latest()
})

beforeEach(async () => {
  await db.connection.seed.run()
})

afterAll(async () => {
  await db.connection.destroy()
})

test('getUsers gets all users', async () => {
  const expected = 1
  const users = await db.getUsers()
  const actual = users.length
  expect(actual).toBe(expected)
})

test('getReview gets a review', async () => {
  const expected = 'bad customer service'
  const reviews = await db.getReviews(77701, testDb)
  const actual = reviews[0].review
  expect(actual).toBe(expected)
})

import { test, expect, vi } from 'vitest'
import request from 'supertest'

import * as db from '../db/db.js'
import server from '../server.js'
import { render } from './test-utils.js'

vi.mock('../db/db.js')


test('Serves one of form from reviews page', async () => {
  vi.mocked(db.getRestaurant).mockImplementation(async (id) => {
    return{
      id: id,
      name: "Fork",
      description: 'Good',
      location: 'Library',
      food_grade: 'B',
      img: '/images/logos/forkNFictionDiner.png',
      rating: 1
    }
  })
  vi.mocked(db.getReviews).mockImplementation(async (id) => {
    return {
      id: id,
      userImage: '/images/fake-user/Anton_Ego.png',
      userName: 'Anton Ego',
      rating: 5,
      review: 'I like it'
    }
  })
    
  const res = await request(server).get('/restaurants/77702/reviews')
  expect(res.statusCode).toBe(200)
  const screen = render(res)
  const heading = screen.getByRole('heading')
  expect(heading.textContent).toMatchInlineSnapshot(`"Fork's reviews"`)
})



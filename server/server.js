import * as Path from 'node:path'
import * as URL from 'node:url'

import express from 'express'
import handlebars from 'express-handlebars'

import userRoutes from './routes/home.js'
import userGroupRoutes from './routes/users.js'
import restaurantRoutes from './routes/restaurants.js'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// Middleware
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.engine('hbs', handlebars.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.set('views', Path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', userRoutes)
server.use('/users', userGroupRoutes)
server.use('/restaurants', restaurantRoutes)

export default server

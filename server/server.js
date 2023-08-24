import * as Path from 'node:path'
import * as URL from 'node:url'
import * as fs from 'fs/promises'

import express from 'express'
import handlebars from 'express-handlebars'
import { createRequire } from 'module'

import userRoutes from './routes/home.js'
import reviewRoutes from './routes/reviews.js'
import userGroupRoutes from './routes/users.js'
import restaurantRoutes from './routes/restaurants.js'

const server = express()
const require = createRequire(import.meta.url)
const Handlebars = require('handlebars')

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
server.use('/restaurants', reviewRoutes)

// Handlebar registering for partials
const headerPartial = await fs.readFile(
  Path.join(__dirname, 'views', 'partials', 'header.hbs')
)

const footerPartial = await fs.readFile(
  Path.join(__dirname, 'views', 'partials', 'footer.hbs')
)

const navigationPartial = await fs.readFile(
  Path.join(__dirname, 'views', 'partials', 'navigation.hbs')
)

Handlebars.registerPartial('header', headerPartial)
Handlebars.registerPartial('footer', footerPartial)
Handlebars.registerPartial('navigation', navigationPartial)

export default server

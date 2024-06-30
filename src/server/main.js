
import 'dotenv/config'
import express from "express";
import ViteExpress from "vite-express";
import path from "path";
import { fileURLToPath } from "url";

import fetch from "node-fetch";
import * as prismic from '@prismicio/client'

const __filename = fileURLToPath(new URL('.', import.meta.url))
const __dirname = path.join(__filename, '..', '..')

const app = express()
const port = 3000

// Uncomment when it's production-ready, to use bundled files
// app.use(express.static(join(__dirname, '/static')))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

const initApi = req => {
  return prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  })
}

app.use((req, res, next) => {
  res.locals.ctx = {
    prismic
  }

  next()
})

const handleRequest = async api => {
  const [ home, meta ] = await Promise.all([
    api.getSingle('home'),
    api.getSingle('meta')
  ])

  return {
    home,
    meta
  }
}

app.get('/', async (req, res) => {
  const api = initApi(req)
  const docs = await handleRequest(api)

  res.render('pages/home', {
    ...docs
  })
})

app.get('/about', (req, res) => {
  res.render('pages/about');
})

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
)
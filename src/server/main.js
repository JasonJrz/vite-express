
import express from "express";
import ViteExpress from "vite-express";
import { join } from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(fileURLToPath(new URL('.', import.meta.url)), '..', '..')

const port = 3000

const app = express();

// Uncomment when it's production-ready, to use bundled files
// app.use(express.static(join(__dirname, '/static')))

app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/about', (req, res) => {
  res.render('pages/about');
})

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
)
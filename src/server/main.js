
import express from "express";
import ViteExpress from "vite-express";
import { join } from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = join(fileURLToPath(new URL('.', import.meta.url)), '..', '..')

const app = express();
app.use(express.static(join(__dirname, '/static')))

app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about');
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
)
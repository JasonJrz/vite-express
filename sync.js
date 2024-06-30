
import browserSync from 'browser-sync'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

browserSync.create()

browserSync.init({
  proxy: "http://localhost:3000",
  port: 3001,
  open: 'external',
  notify: false
})

const views = path.join(__dirname, 'views/**/*.pug')
const js = path.join(__dirname, 'src/**/*.js')
const css = path.join(__dirname, 'src/**/*.css')

browserSync.watch([views, js, css]).on('change', () => browserSync.reload())
const express = require('express');
const app = express();
const movieRouter = require('./routes/movie.router.js')
const genreRouter = require('./routes/genre.router.js')
// ! initialize detailsRouter
const detailsRouter = require('./routes/details.router.js')
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/movies', movieRouter);
app.use('/api/genres', genreRouter)

// ! setup details route!
app.use('/api/details', detailsRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

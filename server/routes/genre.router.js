const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // Add query to get all genres
  // Query to get movie by id, title, and genre names
  const query = `
    SELECT movies.id, movies.title, genres.name FROM "movies"
    JOIN "movies_genres" ON movies.id=movies_genres.movie_id
    JOIN "genres" ON movies_genres.genre_id=genres.id
    WHERE movies.id=$1;
  `
  const queryParams = [req.params.id]

  pool.query(query, queryParams)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('Error getting genres:', err)
    res.sendStatus(500);
  })
});

module.exports = router;

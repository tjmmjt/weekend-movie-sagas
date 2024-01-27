const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// TODO setting up separate router to handle GET details by id
router
  // .get include :id param
  .get("/:id", (req, res) => {
    // query to select all from movies where id === param
    const query = `
      SELECT movies.id, movies.title, movies.poster, movies.description, string_agg(genres.name, ', ') AS genres FROM "movies"
      JOIN "movies_genres" ON movies.id=movies_genres.movie_id
      JOIN "genres" ON movies_genres.genre_id=genres.id
      WHERE movies.id=$1
      GROUP BY movies.id;
    `;
    // initialize queryParams w/ req.params.id
    const queryParams = [req.params.id];
    // console.log('Req.Params.id:', req.params.id)

    // send pool.query w/ query, query params
    pool
      .query(query, queryParams)

      // res.send the result in rows
      .then((result) => {
        console.log("Result.Rows:", result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("Error getting DETAILS:", err);
      });
  });

// don't forget to export router!
module.exports = router;

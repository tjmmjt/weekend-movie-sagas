const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// TODO setting up separate router to handle GET details by id
router
  // .get include :id param
  .get("/:id", (req, res) => {
    // query to select all from movies where id === param
    const query = `
        SELECT * FROM "movies"
        WHERE id=$1;
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

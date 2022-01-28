const express = require("express");
const rateLimit = require("express-rate-limit");
const pool = require("../Config/db");

const router = express.Router();

/* CONFIGURE HERE */
const result_limit = 100; //Limit the ammount of of results per query
const address_column = "situs"; // Name of column that has the full address you want to look up

//configure rate limiters
const limiter15m = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // 100 connections allowed every 5 minutes
  message: "Too many connections from this IP, try again in 5 minutes",
});

//API Routes
router.get("/:address", limiter15m, async (req, res) => {
  const { address } = req.params;

  try {
    // to return additional columns add them after ${address_column}, column2, column3, etc...
    const getAddress = await pool.query(
      `SELECT ${address_column} FROM parcel WHERE situs ILIKE $1 || '%' LIMIT ${result_limit}`,
      [address]
    );

    res.json(getAddress.rows);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

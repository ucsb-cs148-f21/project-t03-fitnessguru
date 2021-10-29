const express = require("express");
const router = express.Router();

const Split = require("../../models/Split");

router.get("/", async (req, res) => {
  const splits = await Split.find();
  res.send(splits);
});

router.post("/", async (req, res) => {
  result = await Split.create(req.body);
  res.send(result);
});

module.exports = router;

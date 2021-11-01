const express = require("express");
const router = express.Router();

const Workout = require("../../models/Workout");

router.get("/", async (req, res) => {
  const workouts = await Workout.find();
  res.send(workouts);
});

router.post("/", async (req, res) => {
  result = await Workout.create(req.body);
  res.send(result);
});

module.exports = router;
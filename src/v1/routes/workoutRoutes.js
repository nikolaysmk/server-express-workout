const express = require("express");
const workoutController = require("../../controllers/workoutController");

const router = express.Router();

const {getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout} = workoutController;

router.get("/", getAllWorkouts);

router.get("/:workoutId", getOneWorkout);

router.post("/", createNewWorkout);

router.patch("/:workoutId", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);

module.exports = router;
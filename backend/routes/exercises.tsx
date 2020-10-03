import { Router } from "express";
let Exercise = require("../models/exercise.model");

const exerciseRouter = Router();
exerciseRouter.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

exerciseRouter.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({ username, description, duration, date });
  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

exerciseRouter.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

exerciseRouter.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercises) => res.json("exercise deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

exerciseRouter.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.params.username;
      exercise.description = req.params.description;
      exercise.duration = req.params.duration;
      exercise.date = req.params.date;

      exercise
        .save()
        .then(() => res.json("Exercise updated."))
        .catch((err) => res.status(400).json("Error:" + err));
    })

    .catch((err) => res.status(400).json("Error:" + err));
});

export default exerciseRouter;

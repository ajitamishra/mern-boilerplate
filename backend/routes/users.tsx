import { Router } from "express";
let User = require("../models/user.model");

const useRouter = Router();

useRouter.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

useRouter.route("/add").post((req, res) => {
  const username = req.body.username;
  console.log(username);
  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

export default useRouter;

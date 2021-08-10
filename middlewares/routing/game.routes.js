const express = require("express");
const path = require('path');

const isSessionValid = require("../isUsersSessionValid.service");
const getListOfLobbies = require("../get.list.of.lobbies.service");
const lobbiesService = require("../lobbies.service");
const gamesService = require("../games.service");

const hbs = require("hbs");
hbs.registerPartials(path.join(__dirname, "../../views/partials"));

const router = express.Router();
router.use(express.static(path.join(__dirname, "../../public")));

router.use(isSessionValid);
router.use("/lobbies(.html)?", getListOfLobbies);
router.get("/lobbies(.html)?", lobbiesService);
router.get("/:id", gamesService);

module.exports = router;

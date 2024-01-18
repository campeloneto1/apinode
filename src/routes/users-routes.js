const express = require("express");
const usersController = require("../controllers/users-controller");
const router = express.Router();

router.get("/", usersController.index);

router.get("/:id", usersController.find);

router.post("/", usersController.create);

router.put("/:id", usersController.update);

router.delete("/:id", usersController.remove);

module.exports = router;
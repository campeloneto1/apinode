const express = require("express");
const usersController = require("../controllers/users-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/", authMiddleware, usersController.index);

router.get("/:id", authMiddleware, usersController.find);

router.post("/", authMiddleware, usersController.create);

router.put("/:id", authMiddleware, usersController.update);

router.delete("/:id", authMiddleware, usersController.remove);

module.exports = router;
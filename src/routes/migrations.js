const express = require("express");
const migrations = require("../models/migrations");
const productionMiddleware = require("../middlewares/production-middleware");
const router = express.Router();

router.get("/db", productionMiddleware, (_req, res) => {
    const query = migrations.createDB();
    res.status(200).send(query); 
})

router.get("/tables", productionMiddleware, (_req, res) => {
    const query = migrations.createTables();
    res.status(200).send(query); 
})

module.exports = router;
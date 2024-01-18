const express = require("express");
const migrations = require("../models/migrations");
const router = express.Router();

router.get("/db", (_req, res) => {
    const query = migrations.createDB();
    res.status(200).send(query); 
})

router.get("/tables", (_req, res) => {
    const query = migrations.createTables();
    res.status(200).send(query); 
})

module.exports = router;
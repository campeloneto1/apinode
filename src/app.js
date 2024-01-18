const express = require("express");
const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users-routes");
const migrations = require("./routes/migrations");
const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/users", usersRoutes);
app.use("/migrate", migrations);

module.exports = app;
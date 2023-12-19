const express = require("express");
const employeesRouter = require("./routes/employees.router");
const indexRouter = require("./routes/index.router");

const app = express();

app.use(express.json());

app.use(indexRouter);
app.use("/api", employeesRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

module.exports = app;
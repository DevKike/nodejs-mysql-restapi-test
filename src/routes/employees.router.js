const { Router } = require("express");
const {
  getEmployees,
  getEmployeeById,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} = require("../controllers/employees.controller");

const router = Router();

router.get("/employees", getEmployees);

//Parámetro :id es de Express.
router.get("/employees/:id", getEmployeeById);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

module.exports = router;

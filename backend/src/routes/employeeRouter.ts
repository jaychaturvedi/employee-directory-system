import express from "express";
const router = express.Router();
import controllers from "../controllers";
import createEmployeeValidation from "../validators/createEmployeeValidation";
import employeeIdValidation from "../validators/employeeIdValidation";

// @route    POST /api/employees
// @access   Public
// @desc     Create employee record
//           a. Create an employee record if required fields are present and respond with status
//           code 201.
//           b. Respond with status code 400 and user friendly message if the required fields
//           are not present.
router.post(
  "/",
  createEmployeeValidation,
  controllers.employeeController.createUser
);

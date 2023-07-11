import express from "express";
const router = express.Router();
import controllers from "../controllers";
import createEmployeeValidation from "../validators/createEmployeeValidation";
import employeeIdValidation from "../validators/employeeIdValidation";

// @route    GET /api/employees
// @access   Public
// @desc     Respond with status code 200 and return records of all employees.
router.get("/", controllers.employeeController.getAllEmployees);

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

// @route    GET /api/employees/{empId}
// @access   Public
// @desc     Get employee by empId
//           a. If a record with the exact empId is found then respond with status code 200 and
//           return the record with empId.
//           b. If a record is not found with exact empId respond with status code 404 and user
//           friendly message.
//           c. If empId is invalid then return status code 400 and a user friendly message.
router.get(
  "/:empId",
  employeeIdValidation,
  controllers.employeeController.getEmployeeById
);

// @route    PUT /api/employees/{empId}
// @access   Private
// @desc     Update employee by empId
//           a. Respond with status code 200 and record details if the record with empId is
//           found.
//           b. If a record is not found with exact empId respond with status code 404 and user
//           friendly message.
//           c. If empId is invalid then return status code 400 and a user friendly message.
router.put(
  "/:empId",
  createEmployeeValidation,
  controllers.employeeController.updateEmployeeById
);

// @route    DELETE /api/employees/{empId}
// @desc     Delete employee by empId
// @access   Private
router.delete(
  "/:empId",
  employeeIdValidation,
  controllers.employeeController.deleteEmployeeById
);

export default router;

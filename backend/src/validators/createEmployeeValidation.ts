import { param, body } from "express-validator";
import { validate } from "../utils/helper";

export default [
  body("employeeName").notEmpty().withMessage("Employee name is required"),
  body("salaryAmount").notEmpty().withMessage("Salary amount is required"),
  body("salaryAmount")
    .isDecimal()
    .withMessage("Salary amount must be a valid decimal number"),
  body("age").notEmpty().withMessage("Age is required"),
  body("age").isInt().withMessage("Age must be a valid number"),
  body("email").isEmail().withMessage("Invalid email"),
  body("degreeDetails").notEmpty().withMessage("Degree details are required"),
  body("degreeDetails")
    .isIn(["BTech", "MTech"])
    .withMessage("Degree details must be either BTech or MTech"),
  body("address").notEmpty().withMessage("Address are required"),
  validate,
];

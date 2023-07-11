import { param, body } from "express-validator";
import { validate } from "../utils/helper";

export default [
  param("empId").notEmpty().withMessage("Employee ID is required"),
  param("empId").isInt().withMessage("Employee ID must be a valid number"),
  validate,
];

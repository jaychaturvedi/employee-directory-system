import catchAsync from "../utils/catchAsync";
import { BadRequestError, NotFoundError } from "../utils/appError";
import { Request, Response, NextFunction } from "express";
import models from "../models";
import { createResponse } from "../utils/helper";

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { employeeName, salaryAmount, age, email, degreeDetails, address } =
      req.body;
    let employee = await models.Employee.findOne({ where: { email } });
    if (employee) {
      throw new BadRequestError("Email is already in use");
    }
    const newEmployee = await models.Employee.create({
      employeeName,
      salaryAmount,
      age,
      email,
      degreeDetails,
      address,
    });

    res.status(201).json(createResponse("OK", { ...newEmployee.toJSON() }));
  }
);


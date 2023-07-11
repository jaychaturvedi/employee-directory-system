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

export const getAllEmployees = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const employees = await models.Employee.findAll();
    if (!employees) {
      throw new NotFoundError("There is no employees for this user");
    }
    res.status(200).json(createResponse("OK", employees));
  }
);

export const getEmployeeById = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const employee = await models.Employee.findByPk(req.params.empId);
    if (!employee) {
      throw new NotFoundError("No employee found with the given employee Id");
    }
    res.status(200).json(createResponse("OK", employee));
  }
);

export const updateEmployeeById = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const { employeeName, salaryAmount, age, email, degreeDetails, address } =
      req.body;
    const [isUpdated, [employee]] = await models.Employee.update(
      { employeeName, salaryAmount, age, email, degreeDetails, address },
      {
        where: { id: req.params.empId },
        returning: true,
      }
    );
    if (!employee) {
      throw new NotFoundError("No employee found with the given employee Id");
    }
    res.status(200).json(createResponse("OK", employee));
  }
);

export const deleteEmployeeById = catchAsync(
  async (req: any, res: Response, next: NextFunction) => {
    const employee = await models.Employee.destroy({
      where: { id: req.params.empId },
    });
    if (!employee) {
      return next(new NotFoundError("No employee found"));
    }
    res.status(200).json(createResponse("OK", null));
  }
);

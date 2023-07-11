import Sequelize, { BuildOptions, DataTypes, Model } from "sequelize";
import db from "../db";

export interface TEmployee {
  id: string;
  employeeName: string;
  salaryAmount: number;
  age: number;
  email: string;
  degreeDetails: "MTech" | "BTech";
  address: string;
  createdAt: any;
  updatedAt: any;
}

type TEmployeeModel<T> = typeof Model & {
  new (values?: object, options?: BuildOptions): T;
};

let Employee: TEmployeeModel<TEmployee & Model> = <
  TEmployeeModel<TEmployee & Model>
>db.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employeeName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    salaryAmount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    degreeDetails: {
      type: DataTypes.ENUM,
      values: ["MTech", "BTech"],
      allowNull: false,
      defaultValue: null,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
  }
);

export default Employee;

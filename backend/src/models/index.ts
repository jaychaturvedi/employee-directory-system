import Employee from "./employeeModel";

Employee.sync({ force: true })
  .then(() => console.log("Employee table created successfully"))
  .catch((error) => console.error("Error creating Employee table:", error));

export default {
  Employee,
};

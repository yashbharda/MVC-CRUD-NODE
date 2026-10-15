import Employee from "../models/employee.model.js";

// Create Employee
const handleCreateNewEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    return res
      .status(201)
      .json({ message: "Employee Created Successfully", employee });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

// Get All Employee
const handleGetAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  } catch (error) {
    return error.status(500).json({
      error: error.message,
    });
  }
};

// Get Employee By ID
const handleGetEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

// Update Employee By Id
const handleUpdateEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
        employee,
      });
    }
    return res.status(200).json({
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const handleDeleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    return res.status(200).json({
      message: "Employee Delete Successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export {
  handleCreateNewEmployee,
  handleGetAllEmployee,
  handleGetEmployeeById,
  handleUpdateEmployeeById,
  handleDeleteEmployeeById,
};

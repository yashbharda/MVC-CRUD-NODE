import express from "express";
import {
  handleCreateNewEmployee,
  handleGetAllEmployee,
  handleGetEmployeeById,
  handleUpdateEmployeeById,
  handleDeleteEmployeeById,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.route("/").post(handleCreateNewEmployee).get(handleGetAllEmployee);
router
  .route("/:id")
  .get(handleGetEmployeeById)
  .patch(handleUpdateEmployeeById)
  .delete(handleDeleteEmployeeById);

export default router;

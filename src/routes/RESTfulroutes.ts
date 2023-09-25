import express from "express";
import controller from "../controllers/ProgramBlock";
import { Schemas, validateSchema } from "../services/middleware";

const router = express.Router();

// Create a ProgramBlock
router.post(
  "/create",
  validateSchema(Schemas.programBlock.create),
  controller.createProgramBlock
);

// Get a ProgramBlock by ID
router.get("/get/:programBlockId", controller.readProgramBlock);

// Get all ProgramBlocks
router.get("/get/", controller.readAllProgramBlocks);

// Update a ProgramBlock by ID
router.patch(
  "/update/:programBlockId",
  validateSchema(Schemas.programBlock.update),
  controller.updateProgramBlock
);

// Delete a ProgramBlock by ID
router.delete("/delete/:programBlockId", controller.deleteProgramBlock);

export default router;

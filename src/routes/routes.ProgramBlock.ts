import express from "express";
import controller from "../controllers/controller.ProgramBlock";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";

const router = express.Router();

/** Program Block CRUD */
router.post( "/create/newProgramBlock/data", ValidateSchema(Schemas.ProgramBlock.create), controller.createProgramBlockController);//create data inside db
router.get( "/:programBlockID/:program-:block/view/data",controller.readProgramBlockController );// read or view the program block from database using id
router.get("/view/all/data",controller.readAllProgramBlockController);// read or view all data inside db
router.put("/:programBlockID/:program-:block/update/data", ValidateSchema(Schemas.ProgramBlock.update), controller.updateProgramBlockController);// update program block
router.delete("/:programBlockID/:program-:block/deleted/data", controller.deleteProgramBlockController);// delete program block

export default router;
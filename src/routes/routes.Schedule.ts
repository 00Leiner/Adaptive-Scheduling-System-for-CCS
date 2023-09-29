import express from "express";
import controller from "../controllers/controller.Schedule";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";

const router = express.Router();

/** Program Block CRUD */
router.post( "/create/newSchedule/data", ValidateSchema(Schemas.Schedule.create), controller.createScheduleController);//create data inside db
router.get( "/:scheduleID/:program-:block/view/data",controller.readScheduleController );// read or view the program block from database using id
router.get("/view/all/data",controller.readAllScheduleController);// read or view all data inside db
router.put("/:scheduleID/:program-:block/update/data", ValidateSchema(Schemas.Schedule.update), controller.updateScheduleController);// update program block
router.delete("/:scheduleID/:program-:block/deleted/data", controller.deleteScheduleController);// delete program block

export default router;
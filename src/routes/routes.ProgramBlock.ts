import express from "express";
import controller from "../controllers/controller.ProgramBlock";
const router = express.Router();

router.get("/:program-:block/view/db", controller.ReadProgramBlockController)// read or view the program block database

export default router;
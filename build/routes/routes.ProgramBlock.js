"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_ProgramBlock_1 = __importDefault(require("../controllers/controller.ProgramBlock"));
const router = express_1.default.Router();
router.get("/:program-:block/view/db", controller_ProgramBlock_1.default.ReadProgramBlockController); // read or view the program block database
exports.default = router;

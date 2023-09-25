"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProgramBlock_1 = __importDefault(require("../controllers/ProgramBlock"));
const middleware_1 = require("../services/middleware");
const router = express_1.default.Router();
router.post("/create", (0, middleware_1.validateSchema)(middleware_1.Schemas.programBlock.create), ProgramBlock_1.default.createProgramBlock);
router.get("/get/:programBlockId", ProgramBlock_1.default.readProgramBlock);
router.get("/get/", ProgramBlock_1.default.readAllProgramBlocks);
router.patch("/update/:programBlockId", (0, middleware_1.validateSchema)(middleware_1.Schemas.programBlock.update), ProgramBlock_1.default.updateProgramBlock);
router.delete("/delete/:programBlockId", ProgramBlock_1.default.deleteProgramBlock);
exports.default = router;
//# sourceMappingURL=RESTfulroutes.js.map
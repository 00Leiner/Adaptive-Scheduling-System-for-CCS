"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = exports.validateSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const logging_1 = __importDefault(require("./logging"));
const validateSchema = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            logging_1.default.error(error);
            res.status(422).json({ error });
        }
    });
};
exports.validateSchema = validateSchema;
exports.Schemas = {
    programBlock: {
        create: joi_1.default.object({
            program: joi_1.default.string().required(),
            block: joi_1.default.string().required(),
            courses: joi_1.default
                .array()
                .items(joi_1.default.object({
                courseDetails: joi_1.default.object({
                    code: joi_1.default.string().required(),
                    description: joi_1.default.string().required(),
                    unit: joi_1.default.string().required(),
                }),
            }))
                .required(),
        }),
        update: joi_1.default.object({
            program: joi_1.default.string().required(),
            block: joi_1.default.string().required(),
            courses: joi_1.default
                .array()
                .items(joi_1.default.object({
                courseDetails: joi_1.default.object({
                    code: joi_1.default.string().required(),
                    description: joi_1.default.string().required(),
                    unit: joi_1.default.string().required(),
                }),
            }))
                .required(),
        }),
    },
};
//# sourceMappingURL=middleware.js.map
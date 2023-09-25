"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProgramBlock_1 = require("../models/ProgramBlock");
const createProgramBlock = (req, res) => {
    const { program, block, courses } = req.body;
    const programBlock = new ProgramBlock_1.ProgramBlockModel({
        program,
        block,
        courses,
    });
    return programBlock
        .save()
        .then((programBlock) => res.status(201).json({ programBlock }))
        .catch((error) => res.status(500).json({ error }));
};
const readProgramBlock = (req, res) => {
    const programBlockId = req.params.programBlockId;
    return ProgramBlock_1.ProgramBlockModel.findById(programBlockId)
        .then((programBlock) => programBlock
        ? res.status(200).json({ programBlock })
        : res.status(404).json({ message: "Not found" }))
        .catch((error) => res.status(500).json({ error }));
};
const readAllProgramBlocks = (res) => {
    return ProgramBlock_1.ProgramBlockModel.find()
        .then((programBlocks) => res.status(200).json({ programBlocks }))
        .catch((error) => res.status(500).json({ error }));
};
const updateProgramBlock = (req, res) => {
    const programBlockId = req.params.programBlockId;
    return ProgramBlock_1.ProgramBlockModel.findById(programBlockId)
        .then((programBlock) => {
        if (programBlock) {
            programBlock.set(req.body);
            return programBlock
                .save()
                .then((programBlock) => res.status(201).json({ programBlock }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: "Not found" });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteProgramBlock = (req, res) => {
    const programBlockId = req.params.programBlockId;
    return ProgramBlock_1.ProgramBlockModel.findByIdAndDelete(programBlockId)
        .then((programBlock) => programBlock
        ? res.status(201).json({ message: "Deleted" })
        : res.status(404).json({ message: "Not found" }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = {
    createProgramBlock,
    readProgramBlock,
    readAllProgramBlocks,
    updateProgramBlock,
    deleteProgramBlock,
};
//# sourceMappingURL=ProgramBlock.js.map
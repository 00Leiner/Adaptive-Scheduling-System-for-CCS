import { Request, Response } from "express";
import { ProgramBlockModel } from "../models/ProgramBlock";

const createProgramBlock = (req: Request, res: Response) => {
  const { program, block, courses } = req.body;

  const programBlock = new ProgramBlockModel({
    program,
    block,
    courses,
  });

  return programBlock
    .save()
    .then((programBlock) => res.status(201).json({ programBlock }))
    .catch((error) => res.status(500).json({ error }));
};

const readProgramBlock = (req: Request, res: Response) => {
  const programBlockId = req.params.programBlockId;

  return ProgramBlockModel.findById(programBlockId)
    .then((programBlock) =>
      programBlock
        ? res.status(200).json({ programBlock })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

const readAllProgramBlocks = (res: Response) => {
  return ProgramBlockModel.find()
    .then((programBlocks) => res.status(200).json({ programBlocks }))
    .catch((error) => res.status(500).json({ error }));
};

const updateProgramBlock = (req: Request, res: Response) => {
  const programBlockId = req.params.programBlockId;

  return ProgramBlockModel.findById(programBlockId)
    .then((programBlock) => {
      if (programBlock) {
        programBlock.set(req.body);
        return programBlock
          .save()
          .then((programBlock) => res.status(201).json({ programBlock }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "Not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteProgramBlock = (req: Request, res: Response) => {
  const programBlockId = req.params.programBlockId;

  return ProgramBlockModel.findByIdAndDelete(programBlockId)
    .then((programBlock) =>
      programBlock
        ? res.status(201).json({ message: "Deleted" })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createProgramBlock,
  readProgramBlock,
  readAllProgramBlocks,
  updateProgramBlock,
  deleteProgramBlock,
};

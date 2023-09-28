import { Response, Request } from "express";
import ProgramBlock from "../models/model.ProgramBlock";
import mongoose from "mongoose";

/** create new Program Block */
const createProgramBlockController = (req: Request, res: Response) => {
  const { program, block, courses } = req.body; //destructing program, block, and courses 
  const courseObjects = courses.map((course: any) => { // transforming the courses into and array of course objects using map function
    const { code, description, unit } = course.courseDetails;// here where you can see the details or information of the course such as code, description, and unit  
    return {
      code,
      description,
      unit,
    };
  });

  const programBlock = new ProgramBlock ({ // creating new program block
    _id: new mongoose.Types.ObjectId(),
    program,
    block,
    courses: courseObjects,
  });
  return programBlock
  .save()
  .then(programBlock => {
    res.status(201).json({ programBlock }); //output
  })
  .catch(error => {
    res.status(500).json({ error }) //error
  });
};

/** read specific program block */
const readProgramBlockController = (req: Request, res: Response) => {
    const programBlockID = req.params.programBlockID; 
    return ProgramBlock.findById(programBlockID).then((programBlock) => // find by program block ID
    programBlock 
      ? res.status(200).json({ programBlock }) // show output
      : res.status(404).json({ message: " Not found" }) // show error or not found if ID not exist 
  ).catch((error) => res.status(500).json({ error })); // show error
};

/** read all program block that exist */
const readAllProgramBlockController = (req: Request, res: Response) =>{
  return ProgramBlock
    .find() // show all 
    .then((programBlock) => res.status(200).json({ programBlock })) // show output
    .catch((error) => res.status(500).json({ error })); // hold and show error
};

/** update program block details */
const updateProgramBlockController = (req: Request, res: Response) =>{
  const programBlockID = req.params.programBlockID; 
    return ProgramBlock.findById(programBlockID)
      .then((programBlock) => {
        if (programBlock) {
          programBlock.set(req.body);
          return programBlock
            .save()
            .then((programBlock) => res.status(200).json({ programBlock })) // output
            .catch((error) => res.status(500).json({ error })); // error
        }else {
          return res.status(404).json({ message: "Not found" })// not exist
        }
      })
      .catch((error) => res.status(500).json({ error })); // error
};

/** delete program block */
const deleteProgramBlockController = (req: Request, res: Response) =>{
  const programBlockID = req.params.programBlockID; 
  return ProgramBlock.findByIdAndDelete(programBlockID)
  .then((programBlock) =>
    programBlock
      ? res.status(201).json({ message: "deleted" })
      : res.status(404).json({ message: " Not found" })
  )
.catch((error) => res.status(500).json({ error }));
};

  export default {
    readProgramBlockController,
    createProgramBlockController,
    readAllProgramBlockController,
    updateProgramBlockController,
    deleteProgramBlockController
  };

import { Response, Request } from "express";
import Schedule from "../models/model.schedule";
import mongoose from "mongoose";

/** create new schedule */
const createScheduleController = (req: Request, res: Response) => {
  const { program, block, courses } = req.body; //destructing program, block, and courses 
  const courseObjects = courses.map((course: any) => { // transforming the courses into and array of course objects using map function
    const { classCode,
        courseCode,
        courseDescription,
        courseUnit,
        day,
        time, 
        room,
        instructor } = course.courseDetails;// here where you can see the details or information of the course such as code, description, and unit  and etc
    return {
        classCode,
        courseCode,
        courseDescription,
        courseUnit,
        day,
        time, 
        room,
        instructor
    };
  });

  const schedule = new Schedule ({ // creating new schedule
    _id: new mongoose.Types.ObjectId(),
    program,
    block,
    courses: courseObjects,
  });
  return schedule
  .save()
  .then(schedule => {
    res.status(201).json({ schedule }); //output
  })
  .catch(error => {
    res.status(500).json({ error }) //error
  });
};

/** read specific schedule */
const readScheduleController = (req: Request, res: Response) => {
    const scheduleID = req.params.scheduleID; 
    return Schedule.findById(scheduleID).then((schedule) => // find by schedule ID
    schedule 
      ? res.status(200).json({ schedule }) // show output
      : res.status(404).json({ message: " Not found" }) // show error or not found if ID not exist 
  ).catch((error) => res.status(500).json({ error })); // show error
};

/** read all schedule that exist */
const readAllScheduleController = (req: Request, res: Response) =>{
  return Schedule
    .find() // show all 
    .then((schedule) => res.status(200).json({ schedule })) // show output
    .catch((error) => res.status(500).json({ error })); // hold and show error
};

/** update schedule details */
const updateScheduleController = (req: Request, res: Response) =>{
  const scheduleID = req.params.scheduleID; 
    return Schedule.findById(scheduleID)
      .then((schedule) => {
        if (schedule) {
          schedule.set(req.body);
          return schedule
            .save()
            .then((schedule) => res.status(200).json({ schedule })) // output
            .catch((error) => res.status(500).json({ error })); // error
        }else {
          return res.status(404).json({ message: "Not found" })// not exist
        }
      })
      .catch((error) => res.status(500).json({ error })); // error
};

/** delete schedule */
const deleteScheduleController = (req: Request, res: Response) =>{
  const scheduleID = req.params.scheduleID; 
  return Schedule.findByIdAndDelete(scheduleID)
  .then((schedule) =>
    schedule
      ? res.status(201).json({ message: "deleted" })
      : res.status(404).json({ message: " Not found" })
  )
.catch((error) => res.status(500).json({ error }));
};

  export default {
    readScheduleController,
    createScheduleController,
    readAllScheduleController,
    updateScheduleController,
    deleteScheduleController
  };

import mongoose, { Document, Schema } from 'mongoose';

/** document */
export interface ISchedule extends Document {
    program: string;
    block: string;
    courses: {
      courseSchedDetails: {
        classCode: string;
        courseCode: string;
        courseDescription: string;
        courseUnit: string;
        day: string;
        time: string; 
        room: string;
        instructor: string;
      };
    }[];//[], indicate as array so the courses can be multiple
  }
 /** schema */
const ScheduleSchema = new Schema<ISchedule>({
    program: { type: String, required: true },
    block: { type: String, required: true },
    courses: [
      {
        courseDetails: {
            classCode: { type: String, required: true },
            courseCode: { type: String, required: true },
            courseDescription: { type: String, required: true },
            courseUnit: { type: String, required: true },
            day: { type: String, required: true },
            time: { type: String, required: true },
            room: { type: String, required: true },
            instructor: { type: String, required: true }
        },
      },
    ],
  });
  
  export default mongoose.model<ISchedule>('Schedule', ScheduleSchema);
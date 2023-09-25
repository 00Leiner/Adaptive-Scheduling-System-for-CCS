import mongoose, { Document, Schema } from "mongoose";

// Define the CourseDetails schema
const CourseDetailsSchema = new Schema({
  //structure
  code: String,
  description: String,
  unit: String,
});
// Define the Course schema
const CourseSchema = new Schema({
  //structure
  courseDetails: CourseDetailsSchema,
});
// Define the ProgramBlock schema
const ProgramBlockSchema = new Schema({
  //cunstructing structure and validation rules
  program: { type: String, required: true },
  block: { type: String, required: true },
  courses: [CourseSchema],
});
// Define the ProgramBlock document interface
export interface IProgramBlock extends Document {
  //it include all the properties and methods of a standard Mongoose document, such as save(), update(), and others.
  program: string;
  block: string;
  courses: Array<{
    courseDetails: {
      code: string;
      description: string;
      unit: string;
    };
  }>;
}
// Create and export the ProgramBlock model
export const ProgramBlockModel = mongoose.model<IProgramBlock>(
  "ProgramBlock", //name of the MongoDB collection. it interact with in the database
  ProgramBlockSchema //structure and validation rules
);

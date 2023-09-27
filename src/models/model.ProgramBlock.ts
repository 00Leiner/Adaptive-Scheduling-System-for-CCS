import mongoose, { Document, Schema } from 'mongoose';

/** document */
export interface IProgramBlock extends Document {
    program: string;
    block: string;
    courses: {
      courseDetails: {
        code: string;
        description: string;
        unit: string;
      };
    }[];//[], indicate as array so the courses can be multiple
  }
 /** schema */
const ProgramBlockSchema = new Schema<IProgramBlock>({
    program: { type: String, required: true },
    block: { type: String, required: true },
    courses: [
      {
        courseDetails: {
          code: { type: String, required: true },
          description: { type: String, required: true },
          unit: { type: String, required: true },
        },
      },
    ],
  });
  
  export default mongoose.model<IProgramBlock>('ProgramBlock', ProgramBlockSchema);
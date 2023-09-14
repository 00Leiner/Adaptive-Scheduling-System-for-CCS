import express from 'express';
import scheduleRouter from './routes/schedule.routes';
import userRouter from './routes/user.routes';
import authMiddleware from './middleware/auth.middleware';

const app = express(); // assign app into express and calling express
const port = process.env.PORT || 3000; // undefined or default 3000

app.use(express.json());   //default express middleware or built-in middleware
app.use(authMiddleware); // Use your authentication middleware here

app.use('/api/schedule', scheduleRouter); // request from /api/schedule will be handle by scheduleRouter 
app.use('/api/user', userRouter); //request from /api/user will be handle by userRouter 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
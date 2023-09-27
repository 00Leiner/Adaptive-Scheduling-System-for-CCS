import express from 'express';
import routeProgramBlock from './routes/routes.ProgramBlock'
import { config } from "./config/config.mongodb";

const app = express()
app.use(express.json())

/** routes */
app.use('/Program.block', routeProgramBlock) //use program block routes

// Start the Express server
app.listen(config.Server.port, () => {
  console.log(`Server is running on port ${config.Server.port}`);
});
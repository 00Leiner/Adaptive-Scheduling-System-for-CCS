import express from 'express';
import * as scheduleController from '../controllers/schedule.controller';

const router = express.Router();

router.post('/', scheduleController.createSchedule);
router.get('/', scheduleController.getAllSchedules);

export default router;
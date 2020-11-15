import Joi from 'joi';
import { checkUserType, validator } from '../middlewares';
import { Controller } from '../classes';
import {
  createAttendanceLog,
} from '../controllers/attendance-log';

class AttendanceLogController extends Controller {
  public basePath = '/attendance-log';

  constructor() {
    super();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/class-status', checkUserType('S'));
    this.router.post('/', checkUserType('S'), validator(Joi.object({
      location: Joi.string().required(),
      remark: Joi.string().required(),
    })), createAttendanceLog);
  }
}

export default AttendanceLogController;

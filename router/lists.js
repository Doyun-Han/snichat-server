import express from 'express';
import 'express-async-error';
import {body} from 'express-validator';
import * as dataController from '../controller/data.js';
import { validate } from '../middleware/validate.js';

const router = express.Router();

router.get('/', dataController.getAlldata);

router.post('/',[body('text').trim().isLength({min : 2}).withMessage('최소 2자 이상 이여야합니다.'),validate], dataController.postMsg)

router.delete('/', dataController.removeMsg);

export default router
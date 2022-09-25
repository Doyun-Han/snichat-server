import express from 'express';
import 'express-async-error';
import * as dataController from '../controller/data.js';

const router = express.Router();

router.get('/', dataController.getAlldata);

router.post('/', dataController.postMsg)

router.delete('/', dataController.removeMsg);

export default router
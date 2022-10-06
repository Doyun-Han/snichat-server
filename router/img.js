import express from 'express';
import 'express-async-error';
import * as imgController from '../controller/img.js'
const router = express.Router();

router.get('/:roomname', imgController.getImg)

export default router
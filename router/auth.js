import express from 'express';
import 'express-async-error';
import {body} from 'express-validator';
import { validate } from '../middleware/validate.js';
import {isAuth} from '../middleware/auth.js'
import * as authController from '../controller/auth.js'
const router = express.Router();

const validateCridential = [
    body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('유효하지 않은 email입니다.'),
    body('password')
    .trim()
    .isLength({min : 6})
    .withMessage('비밀번호는 최소 6자 이상입니다'),
    validate
]

const validateSignUp = [
    ...validateCridential,
    body('username').notEmpty().withMessage('username을 입력해주세요.'),
    body('email').isEmail().normalizeEmail().withMessage('유효하지 않은 이메일 형식입니다.'),
    validate
]

router.post('/login', validateCridential, authController.login )

router.post('/signup',validateSignUp, authController.signUp);

router.get('/me', isAuth, authController.me);

export default router
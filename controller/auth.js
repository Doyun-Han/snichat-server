import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'express-async-error';
import * as userRepository from '../data/auth.js'

const jwtSecretKey = 'fewijWE1G252gjWIk3siwDK5EVldfi';
const jwtExpiresInDays = '1d';
const bcryptSaltRounds = 8;

export async function signUp(req, res) {
    const {username, email, password} = req.body;
    const found = await userRepository.findByEmail(email);
    if(found) {
        return res.status(409).json({ message : `${email}은 이미 존재합니다.`})
    }
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    const userId = await userRepository.createUser({
        username,
        email,
        password : hashed,
    })
    const token = createJwtToken(userId);
    res.status(201).json({token, email});
}

export async function login(req, res) {
    const { email, password } = req.body;
    const user = await userRepository.findByEmail(email);
    if(!user) {
        return res.status(401).json({ message : `email 혹은 password를 확인해주세요`});
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword) {
        return res.status(401).json({ message : `email 혹은 password를 확인해주세요`});
    }
    const token = createJwtToken(user.id);
    res.status(201).json({token, email});
}

function createJwtToken(id) {
    return jwt.sign({id}, jwtSecretKey, {expiresIn : jwtExpiresInDays});
}
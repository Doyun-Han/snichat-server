import express from 'express';
import 'express-async-error';
import morgan from "morgan";
import cors from "cors";
import helmet from 'helmet';
import listsRouter from './router/lists.js'
import authRouter from './router/auth.js'
const app = express();

app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/chat-lists', listsRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
})

app.listen(8080);
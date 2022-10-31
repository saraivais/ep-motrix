import express from 'express';
import cors from 'cors';
import contentRoute from './routes/content.route';
import userRoute from './routes/user.route';
import errorMiddleware from './errors/errorMiddleware';

import 'express-async-errors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/content', contentRoute);
app.use('/users', userRoute);

app.use(errorMiddleware);

export default app;

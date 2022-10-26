import express from 'express';
import userRoute from './routes/user.route';
import errorMiddleware from './errors/errorMiddleware';

import 'express-async-errors';

const app = express();

app.use(express.json());

app.use('/users', userRoute);

app.use(errorMiddleware);

export default app;
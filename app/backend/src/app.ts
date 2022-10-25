import express from 'express';

const app = express();

app.get('/ping', () => console.log('PONG!'));

export default app;
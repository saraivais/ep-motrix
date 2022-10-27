import app from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 4001;

app.listen(PORT, () => console.log(
  `Server is running on port ${PORT}`,
));

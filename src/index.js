import express from 'express';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import logger from '../utils/logger';
import router from './api/v1';
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(err.status || err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: err.message
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

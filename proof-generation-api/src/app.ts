import express from 'express';
import { Worker } from 'worker_threads';
import proofRoutes from './api/routes/proofRoutes';

const app = express();

app.use(express.json());

app.use('/', proofRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

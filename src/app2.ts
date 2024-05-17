import express, { Request, Response } from 'express';
import { performArrayOperations } from './arrayService';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/api/array-operations', (req: Request, res: Response) => {
  const array: number[] = req.body.array;

  if (!Array.isArray(array)) {
    return res.status(400).send({ error: 'Invalid input. Expected an array of numbers.' });
  }

  const results = performArrayOperations(array);
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

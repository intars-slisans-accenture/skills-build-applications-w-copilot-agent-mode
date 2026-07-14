import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectToDatabase from './config/database';
import routes from './routes';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (_req, res) => {
  res.json({
    name: 'Octofit Tracker API',
    baseUrl,
    endpoints: [
      '/api/users',
      '/api/teams',
      '/api/activities',
      '/api/leaderboard',
      '/api/workouts'
    ]
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', baseUrl });
});

connectToDatabase().catch((error) => {
  console.error('Database initialization failed:', error);
});

app.listen(port, () => {
  console.log(`Octofit API listening on ${baseUrl}`);
});

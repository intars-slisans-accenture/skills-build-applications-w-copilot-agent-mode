import { Router } from 'express';
import { ActivityModel, LeaderboardEntryModel, TeamModel, UserModel, WorkoutModel } from '../models';

const router = Router();

router.get('/users', async (_req, res) => {
  try {
    const users = await UserModel.find().lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load users', detail: (error as Error).message });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create user', detail: (error as Error).message });
  }
});

router.get('/teams', async (_req, res) => {
  try {
    const teams = await TeamModel.find().lean();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load teams', detail: (error as Error).message });
  }
});

router.post('/teams', async (req, res) => {
  try {
    const team = await TeamModel.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create team', detail: (error as Error).message });
  }
});

router.get('/activities', async (_req, res) => {
  try {
    const activities = await ActivityModel.find().sort({ createdAt: -1 }).lean();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load activities', detail: (error as Error).message });
  }
});

router.post('/activities', async (req, res) => {
  try {
    const activity = await ActivityModel.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create activity', detail: (error as Error).message });
  }
});

router.get('/leaderboard', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardEntryModel.find().sort({ score: -1 }).lean();
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load leaderboard', detail: (error as Error).message });
  }
});

router.post('/leaderboard', async (req, res) => {
  try {
    const entry = await LeaderboardEntryModel.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create leaderboard entry', detail: (error as Error).message });
  }
});

router.get('/workouts', async (_req, res) => {
  try {
    const workouts = await WorkoutModel.find().lean();
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load workouts', detail: (error as Error).message });
  }
});

router.post('/workouts', async (req, res) => {
  try {
    const workout = await WorkoutModel.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create workout', detail: (error as Error).message });
  }
});

export default router;

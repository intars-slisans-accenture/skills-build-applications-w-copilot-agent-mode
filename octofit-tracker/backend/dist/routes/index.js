"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../models");
const router = (0, express_1.Router)();
router.get('/users', async (_req, res) => {
    try {
        const users = await models_1.UserModel.find().lean();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to load users', detail: error.message });
    }
});
router.post('/users', async (req, res) => {
    try {
        const user = await models_1.UserModel.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to create user', detail: error.message });
    }
});
router.get('/teams', async (_req, res) => {
    try {
        const teams = await models_1.TeamModel.find().lean();
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to load teams', detail: error.message });
    }
});
router.post('/teams', async (req, res) => {
    try {
        const team = await models_1.TeamModel.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to create team', detail: error.message });
    }
});
router.get('/activities', async (_req, res) => {
    try {
        const activities = await models_1.ActivityModel.find().sort({ createdAt: -1 }).lean();
        res.json(activities);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to load activities', detail: error.message });
    }
});
router.post('/activities', async (req, res) => {
    try {
        const activity = await models_1.ActivityModel.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to create activity', detail: error.message });
    }
});
router.get('/leaderboard', async (_req, res) => {
    try {
        const leaderboard = await models_1.LeaderboardEntryModel.find().sort({ score: -1 }).lean();
        res.json(leaderboard);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to load leaderboard', detail: error.message });
    }
});
router.post('/leaderboard', async (req, res) => {
    try {
        const entry = await models_1.LeaderboardEntryModel.create(req.body);
        res.status(201).json(entry);
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to create leaderboard entry', detail: error.message });
    }
});
router.get('/workouts', async (_req, res) => {
    try {
        const workouts = await models_1.WorkoutModel.find().lean();
        res.json(workouts);
    }
    catch (error) {
        res.status(500).json({ error: 'Unable to load workouts', detail: error.message });
    }
});
router.post('/workouts', async (req, res) => {
    try {
        const workout = await models_1.WorkoutModel.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to create workout', detail: error.message });
    }
});
exports.default = router;

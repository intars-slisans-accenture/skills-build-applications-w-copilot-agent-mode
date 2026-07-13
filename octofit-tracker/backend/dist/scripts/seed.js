"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await models_1.UserModel.deleteMany({});
        await models_1.TeamModel.deleteMany({});
        await models_1.ActivityModel.deleteMany({});
        await models_1.LeaderboardEntryModel.deleteMany({});
        await models_1.WorkoutModel.deleteMany({});
        await models_1.UserModel.create([
            { name: 'Ada', email: 'ada@example.com', role: 'admin' },
            { name: 'Linus', email: 'linus@example.com' }
        ]);
        await models_1.TeamModel.create([
            { name: 'Trailblazers', captain: 'Ada', members: ['Ada', 'Linus'] }
        ]);
        await models_1.ActivityModel.create([
            { userId: 'Ada', type: 'run', duration: 30, notes: 'Morning jog' }
        ]);
        await models_1.LeaderboardEntryModel.create([
            { userId: 'Ada', score: 120, rank: 1 }
        ]);
        await models_1.WorkoutModel.create([
            { title: 'Core Blast', focus: 'core', duration: 20, difficulty: 'intermediate' }
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();

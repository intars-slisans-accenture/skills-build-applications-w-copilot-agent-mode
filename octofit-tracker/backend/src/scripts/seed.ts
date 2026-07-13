import mongoose from 'mongoose';
import { ActivityModel, LeaderboardEntryModel, TeamModel, UserModel, WorkoutModel } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await UserModel.deleteMany({});
    await TeamModel.deleteMany({});
    await ActivityModel.deleteMany({});
    await LeaderboardEntryModel.deleteMany({});
    await WorkoutModel.deleteMany({});

    await UserModel.create([
      { name: 'Ada', email: 'ada@example.com', role: 'admin' },
      { name: 'Linus', email: 'linus@example.com' }
    ]);

    await TeamModel.create([
      { name: 'Trailblazers', captain: 'Ada', members: ['Ada', 'Linus'] }
    ]);

    await ActivityModel.create([
      { userId: 'Ada', type: 'run', duration: 30, notes: 'Morning jog' }
    ]);

    await LeaderboardEntryModel.create([
      { userId: 'Ada', score: 120, rank: 1 }
    ]);

    await WorkoutModel.create([
      { title: 'Core Blast', focus: 'core', duration: 20, difficulty: 'intermediate' }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

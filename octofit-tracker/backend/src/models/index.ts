import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'member' }
  },
  { timestamps: true }
);

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    captain: { type: String },
    members: [{ type: String }]
  },
  { timestamps: true }
);

const activitySchema = new Schema(
  {
    userId: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, default: 0 },
    notes: { type: String }
  },
  { timestamps: true }
);

const leaderboardEntrySchema = new Schema(
  {
    userId: { type: String, required: true },
    score: { type: Number, required: true },
    rank: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    focus: { type: String, default: 'fitness' },
    duration: { type: Number, default: 30 },
    difficulty: { type: String, default: 'beginner' }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('User', userSchema);
export const TeamModel = mongoose.model('Team', teamSchema);
export const ActivityModel = mongoose.model('Activity', activitySchema);
export const LeaderboardEntryModel = mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
export const WorkoutModel = mongoose.model('Workout', workoutSchema);

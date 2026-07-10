import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fitnessGoal: { type: String, default: 'Stay active' },
  createdAt: { type: Date, default: Date.now },
});

export const User = model('User', userSchema);

import { model, Schema } from 'mongoose';

const teamSchema = new Schema({
  name: { type: String, required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

export const Team = model('Team', teamSchema);

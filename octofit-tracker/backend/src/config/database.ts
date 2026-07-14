import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function connectToDatabase() {
  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');
}

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

export default connectToDatabase;

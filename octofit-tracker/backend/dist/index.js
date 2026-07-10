"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("./models/User");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend' });
});
app.get('/api/users', async (_req, res) => {
    const users = await User_1.User.find().lean();
    res.json(users);
});
app.post('/api/users', async (req, res) => {
    try {
        const user = await User_1.User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    console.log(`Connected to MongoDB at ${mongoUri}`);
    app.listen(port, '0.0.0.0', () => {
        console.log(`OctoFit backend listening on port ${port}`);
    });
})
    .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
});

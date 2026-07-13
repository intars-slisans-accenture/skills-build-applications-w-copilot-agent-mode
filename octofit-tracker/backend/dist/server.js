"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${port}`;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', routes_1.default);
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
(0, database_1.default)().catch((error) => {
    console.error('Database initialization failed:', error);
});
app.listen(port, () => {
    console.log(`Octofit API listening on ${baseUrl}`);
});

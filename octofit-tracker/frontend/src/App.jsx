import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <main className="container py-4">
      <div className="alert alert-info" role="status">
        Configure VITE_CODESPACE_NAME in .env.local to enable Codespaces API URLs. Without it, the app uses localhost.
      </div>

      <nav className="nav nav-pills flex-wrap gap-2 mb-4">
        <NavLink className="nav-link" to="/">Overview</NavLink>
        <NavLink className="nav-link" to="/users">Users</NavLink>
        <NavLink className="nav-link" to="/teams">Teams</NavLink>
        <NavLink className="nav-link" to="/activities">Activities</NavLink>
        <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
        <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <section className="row g-4">
              <div className="col-lg-7">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h1 className="display-6 fw-bold">OctoFit Tracker</h1>
                    <p className="lead text-muted">
                      Track workouts, manage teams, and stay motivated with a modern fitness dashboard.
                    </p>
                    <p className="text-muted">
                      The dashboard loads data from the Node.js API and automatically switches between Codespaces and localhost URLs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <Users />
              </div>
            </section>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  );
}

export default App;

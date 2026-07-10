import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            Track workouts, manage teams, and stay motivated with a modern fitness dashboard.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#features">Explore Features</a>
            <a className="btn btn-outline-secondary btn-lg" href="#leaderboard">View Leaderboard</a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="h4">Today&apos;s progress</h2>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">🏃 8.4 km run completed</li>
                <li className="list-group-item">💪 3 strength sessions logged</li>
                <li className="list-group-item">🏆 Rank #2 in your team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="row mt-5 g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Activity logging</h3>
              <p className="text-muted">Capture workouts and calories from one streamlined workspace.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Team management</h3>
              <p className="text-muted">Create groups, share goals, and compare progress.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5">Smart insights</h3>
              <p className="text-muted">Use your leaderboard and workout suggestions to stay on track.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

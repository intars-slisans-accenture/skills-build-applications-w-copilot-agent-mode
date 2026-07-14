import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

// Codespace endpoint pattern: -8000.app.github.dev/api/workouts

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadWorkouts() {
      try {
        const response = await fetch(buildApiUrl('workouts'));
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          setWorkouts(Array.isArray(data) ? data : data.results || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load workouts');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadWorkouts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Workouts</h2>
        {loading && <p className="text-muted">Loading workouts…</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!loading && !error && (
          <ul className="list-group list-group-flush">
            {workouts.map((workout) => (
              <li key={workout._id || workout.id || workout.title} className="list-group-item px-0">
                <strong>{workout.title || 'Untitled workout'}</strong>
                <div className="text-muted small">{workout.focus || 'General fitness'} • {workout.duration || 0} min</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Workouts;

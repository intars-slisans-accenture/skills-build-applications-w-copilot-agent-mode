import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

// Codespace endpoint pattern: -8000.app.github.dev/api/teams

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadTeams() {
      try {
        const response = await fetch(buildApiUrl('teams'));
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const data = await response.json();
        if (isMounted) {
          setTeams(Array.isArray(data) ? data : data.results || []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load teams');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadTeams();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="card shadow-sm border-0">
      <div className="card-body">
        <h2 className="h4 mb-3">Teams</h2>
        {loading && <p className="text-muted">Loading teams…</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!loading && !error && (
          <ul className="list-group list-group-flush">
            {teams.map((team) => (
              <li key={team._id || team.id || team.name} className="list-group-item px-0">
                <strong>{team.name || 'Unnamed team'}</strong>
                <div className="text-muted small">{team.members?.join(', ') || 'No members listed'}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Teams;

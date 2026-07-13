export function buildApiUrl(resource) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  let baseUrl = 'http://localhost:8000/api';

  if (codespaceName) {
    baseUrl = `https://${codespaceName}-8000.app.github.dev/api`;
  } else if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname.includes('.app.github.dev')) {
      const resolvedHostname = hostname.replace(/-5173|-5174/g, '-8000');
      baseUrl = `https://${resolvedHostname}/api`;
    }
  }

  return `${baseUrl}/${resource}/`;
}

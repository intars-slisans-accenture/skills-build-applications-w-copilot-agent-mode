export function buildApiUrl(resource) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  let baseUrl = 'http://localhost:8000/api';

  if (codespaceName) {
    baseUrl = `https://${codespaceName}-8000.app.github.dev/api`;
  } else if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol || 'https:';

    if (hostname.includes('.app.github.dev')) {
      const resolvedHostname = hostname
        .replace(/-5173|-5174|-3000|-3001/g, '-8000')
        .replace(/-5173\./, '-8000.')
        .replace(/-5174\./, '-8000.');
      baseUrl = `${protocol}//${resolvedHostname}/api`;
    }
  }

  return `${baseUrl}/${resource}/`;
}

export function buildApiUrl(resource) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  const fallbackBaseUrl = 'http://localhost:8000/api';
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api`
    : fallbackBaseUrl;

  return `${baseUrl}/${resource}/`;
}

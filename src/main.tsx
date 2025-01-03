import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initKeycloak } from './utils/keycloak.ts';
import { initKcAdminClient } from './utils/keycloak-admin.ts';

await initKeycloak();
await initKcAdminClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

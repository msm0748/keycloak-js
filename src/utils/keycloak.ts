import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: 'seokmin-study',
  clientId: 'testApp',
});

export async function initKeycloak() {
  await keycloak.init({
    onLoad: 'check-sso',
  });
}

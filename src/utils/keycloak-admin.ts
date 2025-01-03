import KcAdminClient from '@keycloak/keycloak-admin-client';

export const kcAdminClient = new KcAdminClient({
  baseUrl: import.meta.env.VITE_KEYCLOAK_URL,
  realmName: 'seokmin-study',
});

export const initKcAdminClient = async () => {
  try {
    await kcAdminClient.auth({
      username: 'msm1307@naver.com', // 사용자 이메일
      password: import.meta.env.VITE_KEYCLOAK_PASSWORD, // 사용자 비밀번호
      grantType: 'client_credentials',
      clientId: 'admin-cli', // Keycloak 클라이언트 ID
      clientSecret: import.meta.env.VITE_KEYCLOAK_CLIENT_SECRET, // Keycloak 클라이언트 비밀번호
    });

    console.log('Authenticated successfully');
  } catch (err) {
    console.error('Authentication failed', err);
  }
};

import { useEffect } from 'react';
import { keycloak } from './utils/keycloak';

function App() {
  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak.login();
    }

    keycloak.loadUserInfo().then((userInfo) => {
      console.log(userInfo); // 유저 정보 조회
    });

    const roles =
      keycloak.tokenParsed?.resource_access?.['testApp']?.roles || [];

    roles.forEach((role) => {
      console.log(role); // admin, user 등의 역할 출력
    });

    // accessToken 출력
    const accessToken = keycloak.token;
  }, []);
  return <div>메인</div>;
}

export default App;

import { useEffect } from 'react';
import { keycloak } from './utils/keycloak';

function App() {
  useEffect(() => {
    if (!keycloak.authenticated) {
      keycloak.login();
    }

    keycloak.loadUserInfo().then((userInfo) => {
      console.log(userInfo);
    });
  }, []);
  return <div>메인</div>;
}

export default App;

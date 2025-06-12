import React, { useEffect, useState } from 'react';
import keycloak from './keycloak';

const KeycloakProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      keycloak
        .init({ onLoad: 'login-required' })
        .then(authenticated => {
          setInitialized(true);
          console.log('Authenticated:', authenticated);
          if (!authenticated) {
            window.location.reload(); 
             console.log('User not authenticated');
             // Optional: reload if not authenticated
          }
        })
        .catch(() => {
          console.error('Keycloak init failed');
        });
    }
  }, [initialized]);

  if (!initialized) {
    return <div>Loading authentication...</div>;
  }

  return <>{children}</>;
};

export default KeycloakProvider;
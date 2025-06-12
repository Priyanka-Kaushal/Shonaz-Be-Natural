import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: "http://localhost:8080/",
  realm: "google",
  clientId: "keycloak_auth",
});

// Enable debug logs
keycloak.onReady = () => {
  console.log("Keycloak initialized");
};
keycloak.onAuthSuccess = () => {
  console.log("Authentication successful");
};
keycloak.onAuthError = (error) => {
  console.error("Authentication error:", error);
};
keycloak.onAuthRefreshSuccess = () => {
  console.log("Token refreshed");
};
keycloak.onAuthRefreshError = () => {
  console.error("Token refresh error");
};
keycloak.onAuthLogout = () => {
  console.log("User logged out");
};
keycloak.onTokenExpired = () => {
  console.warn("Token expired");
};

export default keycloak;


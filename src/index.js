import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-besio5tqfkhynfhb.us.auth0.com"
    clientId="zs79JTZH4C3hrX2Lz4HcYl2xlbM5c8ti"
    authorizationParams={{
      redirect_uri:
        "https://react-dashboard-assignmentopeninapp.netlify.app/dashboard",
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

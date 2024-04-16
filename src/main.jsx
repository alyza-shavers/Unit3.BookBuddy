import React from "react";
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from "/src/App.jsx";
import "/src/index.css";

createRoot(document.getElementById("root")).render( // Use createRoot instead of ReactDOM.createRoot
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


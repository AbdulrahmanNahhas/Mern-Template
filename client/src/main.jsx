// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Main Styles
import './styles/index.css'

// For React Router Dom
import AppRoutes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppRoutes />
  </Router>,
)

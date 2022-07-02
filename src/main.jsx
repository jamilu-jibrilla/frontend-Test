import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from 'react'
// import ReactDOM from 'react-dom/client'
import Render from './Render'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Render />
      </BrowserRouter>
  </React.StrictMode>
)

import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//React 17.0.2
//npm install react@17.0.2 react-dom@17.0.2

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById('root')
);
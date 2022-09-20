import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./main.css"
import  { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./global/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>
);

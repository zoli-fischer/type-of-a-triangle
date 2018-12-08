import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import App from './App/App';

window.ts.ui.ready(() => {
    ReactDOM.render(<App />, window.document.getElementById('root'));
});

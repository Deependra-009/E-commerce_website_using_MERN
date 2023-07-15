import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App';
import {BrowserRouter, Routes} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
       <App></App>
    </BrowserRouter>
    ,document.getElementById("root")
);
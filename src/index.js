import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWR from './App';
import {Provider} from "react-redux";
import store from "./Redux/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppWR store={store}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


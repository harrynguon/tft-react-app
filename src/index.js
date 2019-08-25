import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import axios from 'axios';
import apiKey from './apiKey';

// Object data structure:
// {
//     championData: {
//         [
//             champName : string,
//             champData : array
//         ],
//         [...]
//     }
// }

axios.get(`https://solomid-resources.s3.amazonaws.com/blitz/tft/data/champions.json?api_key=${apiKey}`)
        .then(res => {
            // Grab each property and store inside a single array
            renderApp({ championData: Object.entries(res.data) });
        })
        .catch(err => {
            console.log(err, 'index.js');
            renderApp({ championData: [] });
        }
);

const renderApp = (initialReducerState) => {
    const store = createStore(rootReducer, initialReducerState);
    console.log(store.getState(), 'index.js');
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
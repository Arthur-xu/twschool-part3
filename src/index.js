import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Route from './router/index';
import * as serviceWorker from './serviceWorker';

const render = (component) => {
    ReactDOM.render(<App>
        {component}
    </App>,
    document.getElementById('root'));
}
render(Route);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

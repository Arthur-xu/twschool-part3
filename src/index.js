import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index';
import * as serviceWorker from './serviceWorker';
import './index.css';
import MainLayout from './Layout';
import 'antd/dist/antd.css'

const render = (Component) => {
    ReactDOM.render(<MainLayout>
        <Component />
      </MainLayout>,
    document.getElementById('root'));
}
render(Route);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

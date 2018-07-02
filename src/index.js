import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import store from "./state-management";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();

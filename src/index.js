import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';

import './index.scss';

const app =
          <Provider store={store}>
              <App />
          </Provider>

ReactDOM.render(app, document.getElementById('root'));

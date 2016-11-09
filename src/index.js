import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import App from './containers/App'
//import App from './App';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer);

//const store = createStore(/* pass in your reducers here */);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

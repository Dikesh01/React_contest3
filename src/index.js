import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { userReducer } from './Redux/userReducer';
import userReducer from './Redux/userReducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(userReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>
);

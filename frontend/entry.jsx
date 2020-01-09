import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let initState = {};
  let store;

  if (window.currentUser) {
    initState = {
      entities: {
        currentUser: window.currentUser
      },
      session: {
        currentUserId: window.currentUser.id
      }
    };
  }

  store = configureStore(initState);  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
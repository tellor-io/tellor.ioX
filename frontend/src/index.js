import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Network from './contexts/Network';
import User from './contexts/User';
import './style/index.scss';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'

import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  transition: transitions.SCALE,
  containerStyle: {
    zIndex: 100
  }
}

const AlertTemplate = ({ message, close }) => (
  <div className="alertBox">
    {message}
    <div className="flexer"></div>
    {/* <Button
      type="default"
      size="large"
      onClick={close}>Got it</Button> */}
  </div>
)


const store = configureStore().store;
const persistor = configureStore().persistor;

ReactDOM.render(
    <Network>
      <User>
        <AlertProvider template={AlertTemplate} {...options}>
          <Provider store={store}> 
            <PersistGate persistor={persistor}> 
              <App />
            </PersistGate> 
          </Provider>
        </AlertProvider>
      </User>
    </Network>,
  document.getElementById('root'),
);

serviceWorker.unregister();

import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import App from './src/App';
import Splash from './src/screens/Splash/Splash';

const {store, persistor} = configureStore();

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

YellowBox.ignoreWarnings(['Require cycle', 'Remote debugger']);
AppRegistry.registerComponent(appName, () => AppWrapper);

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import * as Sentry from '@sentry/react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import configureStore from './Redux/Store';
import AppNavigation from './Navigations/AppNavigation';

const App = () => {
  const store = configureStore({});

  useEffect(() => {
    Sentry.init({
      dsn: 'https://2f1b0e6376e44ac8b8629a29b79e1d7c@o494048.ingest.sentry.io/6515878',
      // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
      // We recommend adjusting this value in production.
      tracesSampleRate: 1.0,
    });
    // Google AddMob Android Banner :  ca-app-pub-7625215697592154/1878021787
    // Google AddMob Android Interesial : ca-app-pub-7625215697592154/9983726604
    SplashScreen.hide();
  }, []);
  const reactNavigationV5Instrumentation =
    new Sentry.ReactNavigationV5Instrumentation({
      routeChangeTimeoutMs: 500, // How long it will wait for the route change to complete. Default is 1000ms
    });
  return (
    <Provider store={store}>
      <AppNavigation
        reactNavigationV5Instrumentation={reactNavigationV5Instrumentation}
      />
    </Provider>
  );
};

export default App;

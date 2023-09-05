/* eslint-disable prettier/prettier */
import * as React from 'react';

import {
  SetState,
  navigationRef,
  isReadyRef,
} from '../Services/NavigationService';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Login from '../Pages/Login';
import CodePushService from '../Services/CodePushService';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name='CodePushPage' component={CodePushService} />
    <Stack.Screen name="LoginPage" component={Login} />
  </Stack.Navigator>
);

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function AppNavigation ({ reactNavigationV5Instrumentation }) {
  // useReduxDevToolsExtension(SetTopLevelNav)
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={SetState}
      theme={Theme}
      onReady={() => {
        // isReadyRef.current = true;
        // dispatchQueuedActions();
        // // eslint-disable-next-line prettier/prettier
        // reactNavigationV5Instrumentation.registerNavigationContainer(navigationRef);
      }}
    >
      {StackNavigator()}
    </NavigationContainer>
  );
}

export default AppNavigation;

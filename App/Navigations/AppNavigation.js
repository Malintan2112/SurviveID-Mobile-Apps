/* eslint-disable prettier/prettier */
import * as React from 'react';

import {
  SetState,
  navigationRef,
  isReadyRef,
} from '../Services/NavigationService';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import LoginPage from '../Pages/LoginPage';
import CodePushService from '../Services/CodePushService';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="CodePushPage" component={CodePushService} />
      <Stack.Screen name="MainPage" component={BottomTabNavigator} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function AppNavigation({ reactNavigationV5Instrumentation }) {
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
        // reactNavigationV5Instrumentation.registerNavigationContainer(navigationRef);
      }}
    >
      {StackNavigator()}
    </NavigationContainer>
  );
}

export default AppNavigation;

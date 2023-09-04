/* eslint-disable prettier/prettier */
import * as React from 'react';

import {
  SetState,
  navigationRef,
  isReadyRef,
} from '../Services/NavigationService';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import LoginPage from '../Pages/LoginPage';
import ScanBarcode from '../Components/ScanBarcode/ScanBarcode';
import CodePushService from '../Services/CodePushService';
import ProfilPage from '../Pages/ProfilPage';
import ListOptionPage from '../Pages/ListOptionPage';
import FormUserPage from '../Pages/FormUserPage';
import ListDataPage from '../Pages/ListDataPage';
import ListBillingPage from '../Pages/ListBillingPage';
import FormBillingPage from '../Pages/FormBillingPage';
import MemberDetailPage from '../Pages/MemberDetailPage';
import BillingDetailPage from '../Pages/BillingDetailPage';
import RegisterPage from '../Pages/RegisterPage';
import FormEnrollment from '../Pages/FormEnrollment';
import FormTransactionPage from '../Pages/FormTransactionPage';
import FormExpenditurePage from '../Pages/FormExpenditurePage';
import ResetPassword from '../Pages/ResetPassword';
import PDFViewer from '../Pages/PDFViewer';
import ListTransaction from '../Pages/ListTransaction';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="CodePushPage" component={CodePushService} />
    <Stack.Screen name="LoginPage" component={LoginPage} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="RegisterPage" component={RegisterPage} />
    <Stack.Screen name="PDFViewer" component={PDFViewer} />

    <Stack.Screen
      name="HomePage"
      component={BottomTabNavigator}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen name="ProfilPage" component={ProfilPage} />
    <Stack.Screen
      name="FormUserPage"
      component={FormUserPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="FormEnrollment"
      component={FormEnrollment}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="FormBillingPage"
      component={FormBillingPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="FormTransactionPage"
      component={FormTransactionPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="FormExpenditurePage"
      component={FormExpenditurePage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="ListOptionPage"
      component={ListOptionPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="ListDataPage"
      component={ListDataPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="ListBillingPage"
      component={ListBillingPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="MemberDetailPage"
      component={MemberDetailPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="ScanBarcode"
      component={ScanBarcode}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name="BillingDetailPage"
      component={BillingDetailPage}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
     <Stack.Screen
      name="ListTransaction"
      component={ListTransaction}
      options={{ ...TransitionPresets.SlideFromRightIOS }}
    />
  </Stack.Navigator>
);

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function AppNavigation({ reactNavigationV5Instrumentation }) {
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
      }}>
      {StackNavigator()}
    </NavigationContainer>
  );
}

export default AppNavigation;

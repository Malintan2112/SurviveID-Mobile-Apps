import React, {useState} from 'react';
import {BackHandler, Dimensions, ToastAndroid} from 'react-native';
import {useBackHandler} from '@react-native-community/hooks';
import {useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransitionPresets} from '@react-navigation/stack';

import TabBar from './TabBar';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';
import SellAndServices from '../Pages/SellAndServicesPage';

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const [exit, setExit] = useState(false);
  const isFocused = useIsFocused();

  useBackHandler(() => {
    if (isFocused) {
      exitApp();
      return true;
    }
    return false;
  });

  const exitApp = () => {
    setTimeout(() => setExit(false), 7000);
    setExit(state => {
      if (!state) {
        ToastAndroid.showWithGravityAndOffset(
          'Tekan sekali lagi untuk keluar',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          Dimensions.get('screen').height * 0.3,
        );
        return !exit;
      }
      BackHandler.exitApp();
    });
  };
  const itmData = {
    itm_source: 'homepage-sticky-Inspirasi',
    itm_campaign: 'homepage',
    itm_term: '',
  };
  const itemDetail = {
    data: {
      url_key: 'inspirations-and-ideas',
    },
    search: '',
  };
  const onPress = ({navigation}) => ({
    tabPress: e => {},
  });
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      shifting={false}
      tabBarOptions={{
        activeTintColor: '#F26525',
        inactiveTintColor: '#D4DCE6',
        labelStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 9,
          marginTop: -5,
          marginBottom: 5,
        },
      }}
      tabBar={props => <TabBar {...props} />}>
      <BottomTab.Screen name="Home" component={HomePage} />
      <BottomTab.Screen
        name="Agenda"
        component={SellAndServices}
        initialParams={{itemDetail, itmData}}
        listeners={onPress}
      />
      {/* <BottomTab.Screen
        name="Jual & Jasa"
        component={SellAndServices}
        initialParams={{itemDetail, itmData}}
        listeners={onPress}
      /> */}
      <BottomTab.Screen
        name="Profil"
        component={ProfilePage}
        listeners={onPress}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

import React, {useEffect, useState} from 'react';
import {DrawerActions,NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import AuthNavigator from './src/navigations/AuthNavigator';


export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

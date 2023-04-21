import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, ForgotPassword, Register} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import {COLORS, ROUTES} from '../constants'


const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
           <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          // headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
        </Stack.Navigator>
    )
}

export default AuthNavigator;
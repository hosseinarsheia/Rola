import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUp/SignUpScreen';
import VerificationCodeScreen from '../../screens/SignUp/VerificationCodeScreen';
import OnBoardingScreen from '../../screens/OnBoardingScreen';
import { ParamList } from './ParamList';

const Stack = createNativeStackNavigator<ParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="OnBoardingScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VerificationCodeScreen" component={VerificationCodeScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

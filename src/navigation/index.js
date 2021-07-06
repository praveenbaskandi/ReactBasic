import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Button from '../pages/Button';
import InputText from '../pages/InputText';
import IncrementNumber from '../pages/NumberIncrement';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ButtonUI" component={Button} />
      <Stack.Screen name="InputText" component={InputText} />
      <Stack.Screen name="IncrementNumber" component={IncrementNumber} />
    </Stack.Navigator>
  );
};

export default Navigation;

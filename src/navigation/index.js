import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Button from '../pages/Button';
import InputText from '../pages/InputText';
import IncrementNumber from '../pages/NumberIncrement';
import ToastPage from '../pages/ToastPage';
import IconPage from '../pages/IconPage';
import CrousalHorizontalPage from '../pages/CrousalHorizontalPage';
import LocalStoragePage from '../pages/LocalStoragePage';
import LoaderPage from '../pages/LoaderPage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ButtonPage" component={Button} />
      <Stack.Screen name="InputText" component={InputText} />
      <Stack.Screen name="IncrementNumber" component={IncrementNumber} />
      <Stack.Screen name="ToastPage" component={ToastPage} />
      <Stack.Screen name="IconPage" component={IconPage} />
      <Stack.Screen name="LocalStorage" component={LocalStoragePage} />
      <Stack.Screen name="LoaderPage" component={LoaderPage} />
      <Stack.Screen
        name="HorizontalScrollPage"
        component={CrousalHorizontalPage}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

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
import DialogPage from '../pages/DialogPage';
import ReduxForm from '../pages/ReduxFinalForm';
import FlatList from '../pages/FlatListPage';
import ApiRquestPage from '../pages/ApiRequestPage';
import GraphPage from '../pages/GraphPage';
import BottomNav from './BottomNav';

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
      <Stack.Screen name="DialogPage" component={DialogPage} />
      <Stack.Screen
        name="HorizontalScrollPage"
        component={CrousalHorizontalPage}
      />
      <Stack.Screen name="ReduxForm" component={ReduxForm} />
      <Stack.Screen name="FlatList" component={FlatList} />
      <Stack.Screen name="ApiRquestPage" component={ApiRquestPage} />
      <Stack.Screen name="GraphPage" component={GraphPage} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default Navigation;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../pages/BottomNav/NavHome';
import SettingScreen from '../../pages/BottomNav/NavSetting';
import Icon from '../../UI/Icons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ball"
        component={HomeScreen}
        options={{
          tabBarLabel: 'ball',
          tabBarIcon: ({color, size}) => (
            <Icon name="soccer-ball" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Folder"
        component={SettingScreen}
        options={{
          tabBarLabel: 'folder',
          tabBarIcon: ({color, size}) => (
            <Icon name="folder" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

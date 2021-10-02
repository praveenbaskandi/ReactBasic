import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BallScreen from '../../pages/BottomNav/NavBall';
import FolderScreen from '../../pages/BottomNav/NavFolder';
import ThumbScreen from '../../pages/BottomNav/NavThumb';
import Icon from '../../UI/Icons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ball"
        component={BallScreen}
        options={{
          tabBarLabel: 'ball',
          tabBarIcon: ({color}) => (
            <Icon name="soccer-ball" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Folder"
        component={FolderScreen}
        options={{
          tabBarLabel: 'folder',
          tabBarIcon: ({color}) => (
            <Icon name="folder" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Thumb"
        component={ThumbScreen}
        options={{
          tabBarLabel: 'thumb',
          tabBarIcon: ({color}) => (
            <Icon name="thumbs-up-alt" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

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
          tabBarIcon: ({color, size}) => (
            <Icon name="soccer-ball" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Folder"
        component={FolderScreen}
        options={{
          tabBarLabel: 'folder',
          tabBarIcon: ({color, size}) => (
            <Icon name="folder" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thumb"
        component={ThumbScreen}
        options={{
          tabBarLabel: 'thumb',
          tabBarIcon: ({color, size}) => (
            <Icon name="thumbs-up-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

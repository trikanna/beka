import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { COLORS, constants } from '../constants';
import { Contact, Home } from '../screens';
import { TabStackScreens } from '../types';

const Tab = createBottomTabNavigator<TabStackScreens>();

const TabStack = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName='Home'
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ color, size }) => (
        <AntDesign
          name={route.name === constants.screens.home ? 'home' : 'contacts'}
          size={size}
          color={color}
        />
      ),
    })}
    tabBarOptions={{
      activeTintColor: COLORS.red,
      inactiveTintColor: COLORS.gray,
    }}>
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Contact' component={Contact} />
  </Tab.Navigator>
);

export default TabStack;

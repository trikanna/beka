import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Screen1, Screen2 } from '../screens';
import { HomeStackScreens } from '../types';

const Stack = createStackNavigator<HomeStackScreens>();

const HomeStack = (): JSX.Element => (
  <Stack.Navigator headerMode='float'>
    <Stack.Screen
      name='Screen1'
      component={Screen1}
      options={{ title: 'Screen 1' }}
    />
    <Stack.Screen
      name='Screen2'
      component={Screen2}
      options={{ title: 'Screen 2' }}
    />
  </Stack.Navigator>
);

export default HomeStack;

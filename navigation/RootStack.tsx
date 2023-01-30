import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import { SignOut } from '../screens';
import { RootStackScreens } from '../types';

import { DrawerStack } from '.';

const Stack = createStackNavigator<RootStackScreens>();

const RootStack = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName='Drawer'
    screenOptions={() => {
      return {
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      };
    }}
    mode='modal'
    headerMode='none'>
    <Stack.Screen name='Drawer' component={DrawerStack} />
    <Stack.Screen name='SignOut' component={SignOut} />
  </Stack.Navigator>
);

export default RootStack;

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Animated from 'react-native-reanimated';

import { COLORS } from '../constants';
import { StartStackScreens } from '../types';

import { HomeStack, TabStack } from '.';

const Stack = createStackNavigator<StartStackScreens>();

const StartStack = ({ drawerAnimationStyle }) => (
  <Animated.View
    style={{
      flex: 1,
      backgroundColor: COLORS.screenBackgroundColor,
      ...drawerAnimationStyle,
    }}>
    <Stack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyle: {
          backgroundColor: COLORS.transparent,
        },
        animationEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name='Home' component={TabStack} />
      <Stack.Screen name='HomeStack' component={HomeStack} />
    </Stack.Navigator>
  </Animated.View>
);

export default StartStack;

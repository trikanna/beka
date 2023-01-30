import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { CustomDrawer } from '../components';
import { COLORS } from '../constants';
import { DrawerStackScreens } from '../types';

import { StartStack } from '.';

const Drawer = createDrawerNavigator<DrawerStackScreens>();

const DrawerStack = (): JSX.Element => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 1],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 38],
  });

  const rotate = Animated.interpolateNode(progress, {
    inputRange: [0, 15],
    outputRange: [0, -1.8],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 5],
    outputRange: [0, 200],
  });

  const translateY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  const animatedStyle = {
    borderRadius,
    transform: [{ scale, rotate, translateX, translateY }],
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgb(26,24,40)',
      }}>
      <StatusBar barStyle='dark-content' />
      <Drawer.Navigator
        drawerType='slide'
        overlayColor={COLORS.transparent}
        drawerStyle={{
          flex: 1,
          width: '50%',
          paddingRight: 40,
          backgroundColor: COLORS.transparent,
        }}
        sceneContainerStyle={{
          backgroundColor: COLORS.transparent,
        }}
        initialRouteName='StartStack'
        // eslint-disable-next-line react/no-unstable-nested-components
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);

          return <CustomDrawer />;
        }}>
        <Drawer.Screen name='StartStack'>
          {(props) => (
            <StartStack {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerStack;

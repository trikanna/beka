import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

import 'react-native-gesture-handler';
import { COLORS } from './constants';
import RootStack from './navigation/RootStack';

/**
 * fix for stack navigator having a solid background
 * https://github.com/react-navigation/react-navigation/issues/9811
 */
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.transparent,
  },
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

import React, { useEffect } from 'react';
import { StatusBar, View, ViewProps } from 'react-native';

import { COLORS } from '../constants/theme';

const StyledView = (props: ViewProps) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.screenBackgroundColor,
        borderRadius: 38,
      }}>
      {props.children}
    </View>
  );
};

export default StyledView;

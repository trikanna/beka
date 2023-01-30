import React from 'react';
import { Text } from 'react-native';

import { StyledView } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';

const Screen2 = (): JSX.Element => (
  <StyledView>
    <Text
      style={{
        ...FONTS.body2,
        marginBottom: SIZES.padding,
        color: COLORS.red,
      }}>
      Screen 2
    </Text>
  </StyledView>
);

export default Screen2;

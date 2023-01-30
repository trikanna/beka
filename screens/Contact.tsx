import React from 'react';
import { Text } from 'react-native';

import { MenuButton, StyledView } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';

const Contact = (): JSX.Element => (
  <StyledView>
    <MenuButton title='Contact' />
    <Text
      style={{
        ...FONTS.body2,
        marginBottom: SIZES.padding,
        color: COLORS.red,
      }}>
      Contact Page
    </Text>
  </StyledView>
);

export default Contact;

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';
import { DrawerItemProps } from '../types';

const DrawerItem = (props: DrawerItemProps): JSX.Element => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      height: 40,
      width: 124,
      alignItems: 'center',
      paddingLeft: SIZES.radius,
      marginBottom: SIZES.radius,
      borderRadius: SIZES.base,
      backgroundColor: props.isSelected ? COLORS.paleRed : COLORS.transparent,
    }}
    onPress={props.onPress}>
    <Text
      style={{
        color: props.isSelected ? COLORS.red : COLORS.white,
        ...FONTS.body3,
      }}>
      {props.label}
    </Text>
  </TouchableOpacity>
);

export default DrawerItem;

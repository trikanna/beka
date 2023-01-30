import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../constants';

const MenuButton = ({ title }: { title: string }): JSX.Element => {
  const { dispatch } = useNavigation();

  const handleToggleDrawer = useCallback(
    () => dispatch(DrawerActions.toggleDrawer()),
    [dispatch],
  );

  return (
    <TouchableOpacity
      style={{
        height: 36,
        position: 'absolute',
        top: 55,
        left: 18,
      }}
      onPress={handleToggleDrawer}>
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              height: 30,
              width: 26,
              justifyContent: 'center',
              paddingLeft: 3,
            }}>
            <View
              style={{
                width: 26,
                height: 3,
                borderRadius: 4,
                backgroundColor: COLORS.lightGray1,
              }}
            />
            <View
              style={{
                width: 26,
                height: 3,
                borderRadius: 4,
                backgroundColor: COLORS.lightGray1,
                marginTop: 5,
              }}
            />
            <View
              style={{
                width: 26,
                height: 3,
                borderRadius: 4,
                backgroundColor: COLORS.lightGray1,
                marginTop: 5,
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 20,
              textTransform: 'uppercase',
              color: COLORS.gray2,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 18,
            }}>
            {title || ''}
          </Text>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default MenuButton;

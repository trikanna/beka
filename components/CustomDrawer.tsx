import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { COLORS, FONTS, SIZES, constants } from '../constants';

import { DrawerItem } from '.';

const CustomDrawer = (): JSX.Element => {
  const { navigate } = useNavigation();

  const handleSignOutNavigation = useCallback(
    () => navigate('SignOut'),
    [navigate],
  );

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: SIZES.radius,
      }}>
      <Animated.View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding,
          flexGrow: 1,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            paddingLeft: 36,
            paddingVertical: SIZES.padding,
          }}>
          Beka
        </Text>

        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
            width: SIZES.width,
          }}>
          <DrawerItem label={constants.screens.start} isSelected />
          <DrawerItem label={constants.screens.cart} />
          <DrawerItem label={constants.screens.favourite} />
          <DrawerItem label={constants.screens.orders} />
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.darkGray,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
            }}
          />
          {/* NOTE: this was the original position based on the GIF */}
          {/* <CustomDrawerItem label={constants.screens.sign_out} onPress={handleSignOutNavigation} /> */}
        </View>

        {/* NOTE: just moving the Sign Out to the very bottom to follow a pretty common pattern */}
        <View style={{ marginBottom: SIZES.radius }}>
          <DrawerItem
            label={constants.screens.sign_out}
            onPress={handleSignOutNavigation}
          />
        </View>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

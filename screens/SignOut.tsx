import React, { useCallback } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import { COLORS, FONTS, SIZES } from '../constants';

const SignOut = (): JSX.Element => {
  const handleSignOut = useCallback(
    () =>
      Alert.alert(
        '¯\\_(ツ)_/¯',
        'Well... then we need to hire a new Developer right?',
      ),
    [],
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.red,
      }}>
      <View
        style={{
          marginTop: SIZES.font,
          height: 4,
          borderRadius: 3,
          width: 120,
          backgroundColor: COLORS.white2,
        }}
      />
      <View
        style={{
          padding: SIZES.padding,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.transparent,
        }}>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white2,
            textAlign: 'center',
            paddingBottom: 120,
          }}>
          Are you sure you want to leave?
        </Text>

        <Button
          title='Leave now!'
          color={COLORS.white2}
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

export default SignOut;

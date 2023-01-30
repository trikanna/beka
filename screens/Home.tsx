import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

import { MenuButton, StyledView } from '../components';
import { COLORS, FONTS, SIZES } from '../constants';

const Home = (): JSX.Element => {
  const { navigate } = useNavigation();

  return (
    <StyledView>
      <MenuButton title='Start' />

      <Text
        style={{
          ...FONTS.body2,
          marginBottom: SIZES.padding * 2,
          color: COLORS.red,
        }}>
        Home Page
      </Text>

      <Button
        title='Go to Screen 1'
        onPress={() => navigate('HomeStack', { screen: 'Screen1' })}
      />

      <Button
        title='Go to Screen 2'
        onPress={() => navigate('HomeStack', { screen: 'Screen2' })}
      />
    </StyledView>
  );
};

export default Home;

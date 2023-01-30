import { GestureResponderEvent } from 'react-native';

export type DrawerItemProps = {
  label: string;
  isSelected?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export type RootStackScreens = {
  Drawer: undefined;
  SignOut: undefined;
};

export type HomeStackScreens = {
  Screen1: undefined;
  Screen2: undefined;
};

export type StartStackScreens = {
  Home: undefined;
  HomeStack: undefined;
};

export type TabStackScreens = {
  Home: undefined;
  Contact: undefined;
};

export type DrawerStackScreens = {
  StartStack: undefined;
};

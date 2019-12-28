import React from 'react';
import {View} from 'react-native';
import {NavigationScreenConfig} from 'react-navigation';
import {Palette} from '../../../styles/Color';

export const navigationOptions: NavigationScreenConfig<{}, {}> = () => ({
  headerBackTitleStyle: {
    opacity: 0,
  },
  headerTintColor: Palette.White,
  headerTransparent: true,
});

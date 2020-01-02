import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {LayoutProps} from './types';

export const Layout: React.FunctionComponent<LayoutProps> = () => (
  <View style={styles.container}>
    <Text>Home</Text>
  </View>
);

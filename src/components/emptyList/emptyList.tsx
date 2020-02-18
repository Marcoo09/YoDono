import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {getTypographyWithColor, Typography} from '../../styles/typography';
import {Theme} from '../../styles/Theme';

interface LayoutProps {
  message: string;
}
export const EmptyList: React.FunctionComponent<LayoutProps> = ({message}) => (
  <View style={styles.container}>
    <Text
      style={[
        getTypographyWithColor(Theme.GRAY, Typography.CAPTION),
        styles.textAlignment,
      ]}>
      {message}
    </Text>
  </View>
);

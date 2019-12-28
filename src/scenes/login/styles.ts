import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Color';

export const styles = StyleSheet.create({
  cellBackgroungColor: {
    backgroundColor: Palette.White,
  },
  challengePlayer: {
    borderTopColor: Palette.Gray2Theme,
    borderTopWidth: 0.5,
    height: 111,
  },
  container: {
    flex: 1,
  },
  noPadding: {
    backgroundColor: Palette.White,
    padding: 0,
  },
});

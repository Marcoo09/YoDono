import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Color';

export const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: Palette.Grass,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tab: {
    borderColor: Palette.Grass,
    height: 36,
  },
  text: {
    color: Palette.Grass,
  },
});

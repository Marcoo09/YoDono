import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Color';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  headerContainer: {flex: 1, paddingVertical: heightPercentageToDP(3)},
  noPadding: {
    backgroundColor: Palette.White,
    padding: 0,
  },
  listContainer: {
    flex: 7,
  },
});

import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Color';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  noPadding: {
    backgroundColor: Palette.White,
    padding: 0,
  },
  secondaryContainer: {
    flex: 1,
    paddingBottom: heightPercentageToDP(10),
    paddingTop: heightPercentageToDP(10),
    justifyContent: 'space-between',
  },
});

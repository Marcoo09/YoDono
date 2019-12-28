import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Color';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  forgotPasswordContainer: {flex: 1, alignItems: 'flex-end'},
  noPadding: {
    backgroundColor: Palette.White,
    padding: 0,
  },
  inputContainers: {flex: 2},
  secondaryContainer: {
    flex: 1,
    paddingBottom: heightPercentageToDP(5),
    paddingTop: heightPercentageToDP(10),
    justifyContent: 'space-between',
  },
  logoContainer: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  welcomeTextContainer: {flex: 1},
});

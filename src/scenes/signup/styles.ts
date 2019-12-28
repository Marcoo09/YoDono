import {StyleSheet} from 'react-native';
import {Palette} from '../../styles/Color';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export const segmentedControlStyles = StyleSheet.create({
  activeTab: {
    backgroundColor: Palette.Green,
  },
  container: {
    paddingHorizontal: 0,
  },
  tab: {
    borderColor: Palette.Green,
  },
  text: {
    color: Palette.TealGreen,
  },
});

export const styles = StyleSheet.create({
  bottomTextContainer: {alignItems: 'center', justifyContent: 'center'},
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  noPadding: {
    backgroundColor: Palette.White,
    padding: 0,
  },
  inputContainers: {flex: 5},
  secondaryContainer: {
    flex: 1,
    paddingBottom: heightPercentageToDP(5),
    paddingTop: heightPercentageToDP(10),
    justifyContent: 'space-between',
  },
  thirdContainer: {
    flex: 1,
    paddingBottom: heightPercentageToDP(5),
    justifyContent: 'space-between',
  },
  logoContainer: {flex: 2, justifyContent: 'center', alignItems: 'center'},
  signUpHeaderContainer: {flex: 1, paddingTop: heightPercentageToDP(10)},
});

import React from 'react';
import {View, Text} from 'react-native';
import {styles, segmentedControlStyles} from './styles';
import {LayoutProps} from './types';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {getTypographyWithColor, Typography} from '../../styles/typography';
import {Theme} from '../../styles/Theme';
import {Palette} from '../../styles/Color';
import {YoDonoTheme} from '../../styles/General';
import {strings} from './strings';
import {SegmentedControl} from '../../components/SegmentedControl/SegmentedControl';

export const Layout: React.FunctionComponent<LayoutProps> = () => (
  <View style={styles.container}>
    {/* <View style={styles.logoContainer}>
      <Text>LOGO</Text>
    </View> */}
    <View style={styles.signUpHeaderContainer}>
      <Text
        style={getTypographyWithColor(Theme.BLACK, Typography.HEADER2_BOLD)}>
        {strings.signUpText}
      </Text>
      <Text style={getTypographyWithColor(Theme.GRAY, Typography.CAPTION)}>
        Lorem ipsum text dummy sha sabes Lorem ipsum text dummy sha sabes Lorem
        ipsum text dummy sha sabes Lorem ipsum text dummy sha sabes Lorem ipsum
        text dummy sha sabes
      </Text>
    </View>
    <View style={[styles.secondaryContainer, styles.inputContainers]}>
      <TextInput
        label={strings.nameLabel}
        maxLength={40}
        mode={'flat'}
        placeholder={strings.nameLabel}
        onChangeText={() => console.warn('cambio el texto')}
        underlineColor={Palette.Gray}
        selectionColor={Palette.Green}
        theme={YoDonoTheme}
      />
      <TextInput
        label={strings.emailLabel}
        maxLength={40}
        mode={'flat'}
        placeholder={strings.emailLabel}
        onChangeText={() => console.warn('cambio el texto')}
        underlineColor={Palette.Gray}
        selectionColor={Palette.Green}
        theme={YoDonoTheme}
      />
      <TextInput
        label={strings.passwordLabel}
        maxLength={40}
        mode={'flat'}
        placeholder={strings.passwordLabel}
        onChangeText={() => console.warn('cambio el texto')}
        secureTextEntry={true}
        underlineColor={Palette.Gray}
        selectionColor={Palette.Green}
        theme={YoDonoTheme}
      />
      <TextInput
        label={strings.passwordRepeatLabel}
        maxLength={40}
        mode={'flat'}
        placeholder={strings.passwordRepeatLabel}
        onChangeText={() => console.warn('cambio el texto')}
        secureTextEntry={true}
        underlineColor={Palette.Gray}
        selectionColor={Palette.Green}
        theme={YoDonoTheme}
      />
      <SegmentedControl
        tabStyles={segmentedControlStyles}
        selectedTab={0}
        onTabPress={() => console.warn('tab pressed')}
        tabs={[strings.male, strings.female, strings.other]}
      />
      <SegmentedControl
        tabStyles={segmentedControlStyles}
        selectedTab={0}
        onTabPress={() => console.warn('tab pressed')}
        tabs={[strings.ong, strings.person]}
      />
      <Button
        mode="outlined"
        onPress={() => console.log('Pressed')}
        color={Palette.Green}>
        {strings.signUp}
      </Button>
    </View>
    <View style={styles.thirdContainer}>
      <View style={styles.bottomTextContainer}>
        <Text style={getTypographyWithColor(Theme.GRAY, Typography.CAPTION)}>
          {strings.alreadyhaveAnAccount}
        </Text>
      </View>
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        color={Palette.Green}>
        {strings.login}
      </Button>
    </View>
  </View>
);

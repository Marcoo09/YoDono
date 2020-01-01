import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {LayoutProps} from './types';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {getTypographyWithColor, Typography} from '../../styles/typography';
import {Theme} from '../../styles/Theme';
import {Palette} from '../../styles/Color';
import {YoDonoTheme} from '../../styles/General';
import {strings} from './strings';

export const Layout: React.FunctionComponent<LayoutProps> = ({
  navigatesToSignUp,
  email,
  password,
  updateEmail,
  updatePassword,
  loginHandler,
}) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Text>LOGO</Text>
    </View>
    <View style={styles.welcomeTextContainer}>
      <Text
        style={getTypographyWithColor(Theme.BLACK, Typography.HEADER2_BOLD)}>
        {strings.welcomeText}
      </Text>
      <Text style={getTypographyWithColor(Theme.GRAY, Typography.CAPTION)}>
        Lorem ipsum text dummy sha sabes Lorem ipsum text dummy sha sabes Lorem
        ipsum text dummy sha sabes Lorem ipsum text dummy sha sabes Lorem ipsum
        text dummy sha sabes
      </Text>
    </View>
    <View style={[styles.secondaryContainer, styles.inputContainers]}>
      <TextInput
        label={strings.emailLabel}
        maxLength={40}
        mode={'flat'}
        placeholder={strings.emailLabel}
        onChangeText={updateEmail}
        underlineColor={Palette.Gray}
        selectionColor={Palette.Green}
        theme={YoDonoTheme}
        value={email}
      />
      <TextInput
        label={strings.passwordLabel}
        maxLength={40}
        mode={'flat'}
        placeholder={strings.passwordLabel}
        onChangeText={updatePassword}
        secureTextEntry={true}
        underlineColor={Palette.Gray}
        selectionColor={Palette.Green}
        theme={YoDonoTheme}
        value={password}
      />
    </View>
    <View style={styles.forgotPasswordContainer}>
      <Text style={getTypographyWithColor(Theme.GRAY, Typography.CAPTION)}>
        {strings.forgotPassword}
      </Text>
    </View>
    <View style={styles.secondaryContainer}>
      <Button
        mode="contained"
        onPress={loginHandler(email, password)}
        color={Palette.Green}>
        {strings.login}
      </Button>
      <Button
        mode="contained"
        onPress={navigatesToSignUp}
        color={Palette.Green}>
        {strings.signUp}
      </Button>
    </View>
  </View>
);

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
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
import {
  genderTabs,
  typesTabs,
  getTypeByIndex,
  getGenderByIndex,
} from '../../types/User/utils';

export const Layout: React.FunctionComponent<LayoutProps> = ({
  navigateToLogin,
  createNewAccount,
  fullName,
  email,
  password,
  passwordRepeat,
  genderState,
  typeState,
  updateFullName,
  updateEmail,
  updatePassword,
  updatePasswordRepeat,
  setGender,
  setType,
}) => (
  <View style={styles.container}>
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
      <ScrollView scrollEnabled={true}>
        <TextInput
          label={strings.nameLabel}
          maxLength={40}
          mode={'flat'}
          placeholder={strings.nameLabel}
          onChangeText={updateFullName}
          underlineColor={Palette.Gray}
          selectionColor={Palette.Green}
          theme={YoDonoTheme}
          value={fullName}
        />
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
        <TextInput
          label={strings.passwordRepeatLabel}
          maxLength={40}
          mode={'flat'}
          placeholder={strings.passwordRepeatLabel}
          onChangeText={updatePasswordRepeat}
          secureTextEntry={true}
          underlineColor={Palette.Gray}
          selectionColor={Palette.Green}
          theme={YoDonoTheme}
          value={passwordRepeat}
        />
        <SegmentedControl
          tabStyles={segmentedControlStyles}
          selectedTab={genderState.genderIndex}
          onTabPress={(index: number) => {
            setGender({
              gender: getGenderByIndex(index),
              genderIndex: index,
            });
          }}
          tabs={genderTabs}
        />
        <SegmentedControl
          tabStyles={segmentedControlStyles}
          selectedTab={typeState.typeIndex}
          onTabPress={(index: number) => {
            setType({
              type: getTypeByIndex(index),
              typeIndex: index,
            });
          }}
          tabs={typesTabs}
        />
      </ScrollView>
      <Button
        mode="outlined"
        onPress={createNewAccount({
          fullName: fullName!,
          email: email!,
          password: password!,
          gender: genderState.gender,
          type: typeState.type,
        })}
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
      <Button mode="contained" onPress={navigateToLogin} color={Palette.Green}>
        {strings.login}
      </Button>
    </View>
  </View>
);

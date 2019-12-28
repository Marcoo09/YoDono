import { Platform } from 'react-native'
import { Font as FontAndroid } from 'src/styles/Font.android'
import { Font as FontIOS } from 'src/styles/Font.ios'

export const Font = Platform.select({
  android: FontAndroid,
  ios: FontIOS,
})

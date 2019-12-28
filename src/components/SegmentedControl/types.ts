import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export interface Tabs {
  styles: {
    activeTab: StyleProp<TextStyle>
    container?: StyleProp<TextStyle>
    tab: StyleProp<ViewStyle>
    text: StyleProp<TextStyle>
  }
  tabs: string[]
}

import { StyleProp, ViewStyle } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-view'

export interface LayoutProps {
  forceInset?: SafeAreaViewProps['forceInset']
  style?: StyleProp<ViewStyle>
}

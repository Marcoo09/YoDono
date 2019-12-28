import * as React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { styles } from './styles'
import { LayoutProps } from './types'

export const SceneContainer: React.StatelessComponent<LayoutProps> = ({
  forceInset,
  style,
  children,
}) => (
  <SafeAreaView style={[styles.container, style]} forceInset={forceInset}>
    {children}
  </SafeAreaView>
)

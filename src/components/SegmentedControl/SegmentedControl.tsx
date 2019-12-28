import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { styles } from './styles'

interface TabStyles {
  activeTab: StyleProp<TextStyle>
  container?: StyleProp<TextStyle>
  text: StyleProp<TextStyle>
  tab: StyleProp<ViewStyle>
}

interface LayoutProps {
  tabs: any[]
  selectedTab?: number
  onTabPress: (index: number) => void
  tabStyles: TabStyles
}

export const SegmentedControl: React.FunctionComponent<LayoutProps> = ({
  tabs,
  selectedTab,
  onTabPress,
  tabStyles,
}) => (
    <View style={[styles.container, tabStyles.container]}>
      <SegmentedControlTab
        values={tabs}
        selectedIndex={selectedTab}
        onTabPress={onTabPress}
        activeTabStyle={[styles.activeTab, tabStyles.activeTab]}
        tabTextStyle={[styles.text, tabStyles.text]}
        tabStyle={[styles.tab, tabStyles.tab]}
        borderRadius={30}
      />
    </View>
  )

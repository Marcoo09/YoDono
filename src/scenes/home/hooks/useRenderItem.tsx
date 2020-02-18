import React, {ReactElement, useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {View} from 'react-native';
import {Palette} from '../../../styles/Color';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export interface InnerProps {
  renderItem: (item: ListRenderItemInfo<any>) => ReactElement<any>;
}

export const renderItem = (itemWrapper: ListRenderItemInfo<any>) => (
  <View key={itemWrapper.item} style={{padding: 15}}>
    <View
      style={{
        flex: 1,
        backgroundColor: Palette.White,
        height: heightPercentageToDP(10),
        shadowColor: Palette.BrownishGreyThree,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}></View>
  </View>
);

export const useRenderItem = (): InnerProps => ({
  renderItem: useCallback(
    (itemWrapper: ListRenderItemInfo<any>) => renderItem(itemWrapper),
    [],
  ),
});

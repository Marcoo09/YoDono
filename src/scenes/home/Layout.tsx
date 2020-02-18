import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './styles';
import {LayoutProps} from './types';
import {getTypographyWithColor, Typography} from '../../styles/typography';
import {Theme} from '../../styles/Theme';
import {EmptyList} from '../../components/emptyList/emptyList';
import {keyExtractor} from '../../common/keyExtractor';
import {strings} from './strings';

const mockData = [
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
  {
    productName: 'Comida de perros',
    zone: 'Itusaingo',
    timeAvailability: [
      {
        hourFrom: '17:00',
        hourTo: '18:00',
      },
      {
        hourFrom: '10:00',
        hourTo: '12:00',
      },
    ],
  },
];

export const Layout: React.FunctionComponent<LayoutProps> = ({renderItem}) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text
        style={getTypographyWithColor(Theme.BLACK, Typography.HEADER2_BOLD)}>
        {strings.homeTitle}
      </Text>
    </View>
    <View style={styles.listContainer}>
      <FlatList
        keyExtractor={keyExtractor}
        data={mockData}
        ListEmptyComponent={<EmptyList message={strings.emptyListMessage} />}
        renderItem={renderItem}
      />
    </View>
  </View>
);

import React, {Fragment} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles';

export const Login = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <LearnMoreLinks />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

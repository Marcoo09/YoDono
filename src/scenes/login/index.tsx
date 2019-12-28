import React from 'react';
import {styles} from './styles';
import {outerInset} from './navigation/sceneConfig';
import {SceneContainer} from '../../components/SceneContainer';
import {View, Text} from 'react-native';

export const Login = () => {
  return (
    <SceneContainer forceInset={outerInset} style={styles.noPadding}>
      <View style={{flex: 1}}>
        <Text>Hola</Text>
      </View>
    </SceneContainer>

    // <Fragment>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       <LearnMoreLinks />
    //     </ScrollView>
    //   </SafeAreaView>
    // </Fragment>
  );
};

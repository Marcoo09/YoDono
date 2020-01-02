import React from 'react';
import {styles} from './styles';
import {outerInset} from './navigation/sceneConfig';
import {SceneContainer} from '../../components/SceneContainer';
import {Layout} from './Layout';
import {NavigationScreenComponent, NavigationParams} from 'react-navigation';

export const Home: NavigationScreenComponent<NavigationParams, {}> = () => {
  return (
    <SceneContainer forceInset={outerInset} style={styles.noPadding}>
      <Layout />
    </SceneContainer>
  );
};

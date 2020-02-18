import React from 'react';
import {styles} from './styles';
import {outerInset} from './navigation/sceneConfig';
import {SceneContainer} from '../../components/SceneContainer';
import {Layout} from './Layout';
import {NavigationScreenComponent, NavigationParams} from 'react-navigation';
import {useRenderItem} from './hooks/useRenderItem';

export const Home: NavigationScreenComponent<NavigationParams, {}> = () => {
  const {renderItem} = useRenderItem();
  return (
    <SceneContainer forceInset={outerInset} style={styles.noPadding}>
      <Layout renderItem={renderItem} />
    </SceneContainer>
  );
};

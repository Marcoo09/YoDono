import React from 'react';
import {styles} from './styles';
import {outerInset} from './navigation/sceneConfig';
import {SceneContainer} from '../../components/SceneContainer';
import {Layout} from './Layout';
import {NavigationScreenComponent, NavigationParams} from 'react-navigation';
import {useNavigatesTo} from '../../customHooks/useNavigatesTo';
import {Route} from '../../navigation/Route';

export const Login: NavigationScreenComponent<NavigationParams, {}> = ({
  navigation,
}) => {
  const navigatesToSignUp = useNavigatesTo({navigation, route: Route.SignUp});
  return (
    <SceneContainer forceInset={outerInset} style={styles.noPadding}>
      <Layout navigatesToSignUp={navigatesToSignUp} />
    </SceneContainer>
  );
};

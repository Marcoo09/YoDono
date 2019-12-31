import React from 'react';
import {styles} from './styles';
import {outerInset} from './navigation/sceneConfig';
import {SceneContainer} from '../../components/SceneContainer';
import {Layout} from './Layout';
import {useNavigatesTo} from '../../customHooks/useNavigatesTo';
import {Route} from '../../navigation/Route';
import {NavigationScreenComponent, NavigationParams} from 'react-navigation';
import {useRedux} from './redux/useRedux';
import {userFormValues} from './hooks/useFormValues';

export const SignUp: NavigationScreenComponent<NavigationParams, {}> = ({
  navigation,
}) => {
  const {createNewAccount} = useRedux();
  const navigateToLogin = useNavigatesTo({navigation, route: Route.Login});
  return (
    <SceneContainer forceInset={outerInset} style={styles.noPadding}>
      <Layout
        navigateToLogin={navigateToLogin}
        createNewAccount={createNewAccount}
        {...userFormValues()}
      />
    </SceneContainer>
  );
};

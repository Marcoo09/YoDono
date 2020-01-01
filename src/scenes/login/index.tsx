import React from 'react';
import {styles} from './styles';
import {outerInset} from './navigation/sceneConfig';
import {SceneContainer} from '../../components/SceneContainer';
import {Layout} from './Layout';
import {NavigationScreenComponent, NavigationParams} from 'react-navigation';
import {useNavigatesTo} from '../../customHooks/useNavigatesTo';
import {Route} from '../../navigation/Route';
import {userFormValues} from './hooks/useFormValues';
import {useRedux} from './redux/useRedux';

export const Login: NavigationScreenComponent<NavigationParams, {}> = ({
  navigation,
}) => {
  const navigatesToSignUp = useNavigatesTo({navigation, route: Route.SignUp});
  const {loginHandler} = useRedux();
  return (
    <SceneContainer forceInset={outerInset} style={styles.noPadding}>
      <Layout
        navigatesToSignUp={navigatesToSignUp}
        loginHandler={loginHandler}
        {...userFormValues()}
      />
    </SceneContainer>
  );
};

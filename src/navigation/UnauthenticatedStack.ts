import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '../scenes/login';
import {Route} from './Route';
import {SignUp} from '../scenes/signup';

export const UnauthenticatedStack = createStackNavigator(
  {
    [Route.Login]: Login,
    [Route.SignUp]: SignUp,
  },
  {
    cardStyle: {
      flex: 1,
    },
    headerMode: 'none',
    initialRouteName: Route.Login,
    mode: 'modal',
    transparentCard: true,
  },
);

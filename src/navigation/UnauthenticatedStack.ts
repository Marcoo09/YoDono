import {createStackNavigator} from 'react-navigation-stack';
import {Login} from '../scenes/login';
import {Route} from './Route';

export const UnauthenticatedStack = createStackNavigator(
  {
    [Route.Login]: {
      screen: Login,
    },
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

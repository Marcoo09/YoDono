import {createStackNavigator} from 'react-navigation-stack';
import {Route} from './Route';
import {Home} from '../scenes/home';

export const AuthenticatedStack = createStackNavigator(
  {
    [Route.Home]: Home,
  },
  {
    cardStyle: {
      flex: 1,
    },
    initialRouteName: Route.Home,
  },
);

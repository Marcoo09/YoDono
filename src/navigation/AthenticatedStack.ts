import {createStackNavigator} from 'react-navigation-stack';
import {Route} from './Route';
import {Home} from '../scenes/home';
import {TabNavigator} from './TabNavigator';

export const AuthenticatedStack = createStackNavigator(
  {
    [Route.Home]: TabNavigator,
  },
  {
    cardStyle: {
      flex: 1,
    },
    initialRouteName: Route.Home,
  },
);

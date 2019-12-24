import {createStackNavigator} from 'react-navigation';
import {Login} from '../scenes/login';
import {Route} from './Route';

export const UnauthenticatedStack = createStackNavigator(
  {
    [Route.UnauthenticatedStack]: createStackNavigator(
      {
        [Route.Login]: Login,
      },
      {
        cardStyle: {
          flex: 1,
        },
        initialRouteName: Route.Login,
        mode: 'card',
        transparentCard: true,
      },
    ),
  },
  {
    cardStyle: {
      flex: 1,
    },
    headerMode: 'none',
    initialRouteName: Route.UnauthenticatedStack,
    mode: 'modal',
    transparentCard: true,
  },
);

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Route} from './Route';
import {UnauthenticatedStack} from './UnauthenticatedStack';
import {AuthenticatedStack} from './AthenticatedStack';
import {CheckToken} from '../scenes/CheckToken';

export const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      [Route.CheckToken]: CheckToken,
      [Route.UnauthenticatedStack]: UnauthenticatedStack,
      [Route.AuthenticatedStack]: AuthenticatedStack,
    },
    {
      initialRouteName: Route.CheckToken,
    },
  ),
);

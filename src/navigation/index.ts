import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Route} from './Route';
import {UnauthenticatedStack} from './UnauthenticatedStack';
import {AuthenticatedStack} from './AthenticatedStack';

export const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      [Route.UnauthenticatedStack]: UnauthenticatedStack,
      [Route.AuthenticatedStack]: AuthenticatedStack,
    },
    {
      initialRouteName: Route.UnauthenticatedStack,
    },
  ),
);

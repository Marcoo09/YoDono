import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Route} from './Route';
import {UnauthenticatedStack} from './UnauthenticatedStack';

export const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      [Route.UnauthenticatedStack]: UnauthenticatedStack,
    },
    {
      initialRouteName: Route.UnauthenticatedStack,
    },
  ),
);

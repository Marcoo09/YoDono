import {NavigationActions} from 'react-navigation';
import {Route} from '../../../navigation/Route';

export const navigateToAuthenticated = NavigationActions.navigate({
  routeName: Route.Home,
});

export const navigateToUnauthenticated = NavigationActions.navigate({
  routeName: Route.UnauthenticatedStack,
});

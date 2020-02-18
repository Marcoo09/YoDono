import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Home} from '../scenes/home';
import {Route} from './Route';
import {Login} from '../scenes/login';
import {SignUp} from '../scenes/signup';

export const TabNavigator = createBottomTabNavigator({
  [Route.Home]: Home,
  [Route.Login]: Login,
  [Route.SignUp]: SignUp,
});

import {Route} from '../navigation/Route';
import {Navigation} from '../types/navigation';
import {useCallback} from 'react';

interface HookProps {
  route: Route;
  navigation: Navigation;
}

export const useNavigatesTo = ({navigation, route}: HookProps) =>
  useCallback(() => navigation.navigate(route), [navigation]);

import {getPersistedSession} from '../../common/sessionPersistence';
import {
  navigateToAuthenticated,
  navigateToUnauthenticated,
} from '../../store/global/auth/navigationHelpers';
import {dispatch} from '../../common/navigation';
import {useEffect} from 'react';

export const CheckToken = () => {
  useEffect(() => {
    const verifySession = async () => {
      const isSessionLoaded = await getPersistedSession();
      if (isSessionLoaded !== undefined) {
        dispatch(navigateToAuthenticated);
      } else {
        dispatch(navigateToUnauthenticated);
      }
    };
    verifySession();
  }, []);

  return null;
};

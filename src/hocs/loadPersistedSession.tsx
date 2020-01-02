import {SetupInterceptors} from '../networking/interceptors/SetupInterceptors';
import {getPersistedSession} from '../common/sessionPersistence';

export const loadPersistedSession = async (completion: () => void) => {
  const session = await getPersistedSession();

  if (!session || !session.access_token) {
    completion();
    return;
  }
  SetupInterceptors(session);
  completion();
};

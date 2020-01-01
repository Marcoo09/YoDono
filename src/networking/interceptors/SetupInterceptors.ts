import {setupAuthInterceptor} from './AuthInterceptor';
import {Session} from '../../types/Session/session';

export const SetupInterceptors = (session: Session) => {
  setupAuthInterceptor(session);
};

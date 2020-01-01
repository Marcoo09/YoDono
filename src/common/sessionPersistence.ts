import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import {Session} from '../types/Session/session';

export const sessionKey = 'kSessionKey';

export function persistSession(session: Session): Promise<undefined> {
  return RNSecureKeyStore.set(sessionKey, JSON.stringify(session), {
    accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
  }).catch((err: any) => {
    console.warn(
      'Unable to store session key in keychain. error: ',
      err.message,
    );
  });
}

export async function getPersistedSession(): Promise<Session | undefined> {
  const sessionEncoded = await RNSecureKeyStore.get(sessionKey).catch(
    (err: any) => {
      if (err.code !== '404') {
        console.warn('Unable to get session token. error: ', err.message);
      }
    },
  );

  return sessionEncoded ? JSON.parse(sessionEncoded) : undefined;
}

export function clearPersistedSession(): Promise<undefined> {
  return RNSecureKeyStore.remove(sessionKey).catch((err: any) => {
    console.warn('Unable to remove session token. error: ', err.message);
  });
}

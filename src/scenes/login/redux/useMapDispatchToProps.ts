import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../../store/global/auth/actions';

export const useMapDispatchToProps = () => {
  const dispatch = useDispatch();
  const loginHandler = useCallback(
    (email?: string, password?: string) => () =>
      dispatch(login(email, password)),
    [dispatch],
  );
  return {
    loginHandler,
  };
};

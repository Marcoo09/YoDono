import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {createAccount} from '../../../store/global/auth/actions';
import {UserModel} from '../../../types/User/user';

export const useMapDispatchToProps = () => {
  const dispatch = useDispatch();
  const createNewAccount = useCallback(
    (user: UserModel) => dispatch(createAccount(user)),
    [dispatch],
  );
  return {
    createNewAccount,
  };
};

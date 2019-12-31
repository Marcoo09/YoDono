import {UserModel} from '../../types/User/user';

export interface LayoutProps {
  navigateToLogin: () => void;
  createNewAccount: (user: UserModel) => void;
}

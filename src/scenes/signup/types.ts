import {UserModel, GenderTabsState, TypeTabsState} from '../../types/User/user';

export interface LayoutProps {
  navigateToLogin: () => void;
  createNewAccount: (user: UserModel) => () => void;
  fullName?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
  genderState: GenderTabsState;
  typeState: TypeTabsState;
  updateFullName: (fullName: string) => void;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  updatePasswordRepeat: (password: string) => void;
  setGender: (newGender: GenderTabsState) => void;
  setType: (type: TypeTabsState) => void;
}

import {useState} from 'react';
import {GenderTabsState, TypeTabsState} from '../../../types/User/user';
import {genderTabs, typesTabs} from '../../../types/User/utils';

export interface State {
  fullName?: string;
  email?: string;
  password?: string;
  passwordRepeat?: string;
  genderState: GenderTabsState;
  typeState: TypeTabsState;
}

export interface Updaters {
  updateFullName: (fullName: string) => void;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  updatePasswordRepeat: (password: string) => void;
  setGender: (newGender: GenderTabsState) => void;
  setType: (type: TypeTabsState) => void;
}

export type HookProps = State & Updaters;

export const userFormValues = (): HookProps => {
  const [fullName, updateFullName] = useState<string | undefined>(undefined);
  const [email, updateEmail] = useState<string | undefined>(undefined);
  const [password, updatePassword] = useState<string | undefined>(undefined);
  const [passwordRepeat, updatePasswordRepeat] = useState<string | undefined>(
    undefined,
  );
  const [genderState, setGender] = useState<GenderTabsState>({
    gender: genderTabs[0],
    genderIndex: 1,
  });

  const [typeState, setType] = useState<TypeTabsState>({
    type: typesTabs[0],
    typeIndex: 1,
  });

  return {
    fullName,
    email,
    password,
    passwordRepeat,
    genderState,
    typeState,
    updateFullName,
    updateEmail,
    updatePassword,
    updatePasswordRepeat,
    setGender,
    setType,
  };
};

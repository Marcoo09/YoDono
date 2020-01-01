import {useState} from 'react';

export interface State {
  email?: string;
  password?: string;
}

export interface Updaters {
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
}

export type HookProps = State & Updaters;

export const userFormValues = (): HookProps => {
  const [email, updateEmail] = useState<string | undefined>(undefined);
  const [password, updatePassword] = useState<string | undefined>(undefined);

  return {
    email,
    password,
    updateEmail,
    updatePassword,
  };
};

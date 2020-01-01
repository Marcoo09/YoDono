export interface LayoutProps {
  navigatesToSignUp: () => void;
  loginHandler: (email?: string, password?: string) => () => void;
  email?: string;
  password?: string;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
}

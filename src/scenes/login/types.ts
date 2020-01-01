export interface LayoutProps {
  navigatesToSignUp: () => void;
  email?: string;
  password?: string;
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
}

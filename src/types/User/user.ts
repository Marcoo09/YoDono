export interface UserModel {
  fullName: string;
  email: string;
  gender: Gender | string;
  type: UserType | string;
  password: string;
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export enum UserType {
  ONG = 'ONG',
  PERSON = 'Person',
}

export interface GenderTabsState {
  gender: string;
  genderIndex: number;
}

export interface TypeTabsState {
  type: string;
  typeIndex: number;
}

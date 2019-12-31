export interface UserModel {
  fullName: string;
  email: string;
  gender: Gender;
  type: UserType;
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

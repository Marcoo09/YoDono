import {strings} from './strings';
import {Gender, UserType} from './user';

export const genderTabs = [strings.male, strings.female, strings.other];

export const typesTabs = [strings.ong, strings.person];

export const getGenderByIndex = (index: number): Gender => {
  switch (index) {
    case 0:
      return Gender.MALE;
    case 1:
      return Gender.FEMALE;
    default:
      return Gender.OTHER;
  }
};

export const getTypeByIndex = (index: number): UserType => {
  switch (index) {
    case 0:
      return UserType.ONG;
    case 1:
      return UserType.PERSON;
    default:
      return UserType.PERSON;
  }
};

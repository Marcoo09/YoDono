import {useMapDispatchToProps} from './useMapDispatchToProps';

type ReduxConnection = ReturnType<typeof useMapDispatchToProps>;

export const useRedux = (): ReduxConnection => {
  return {
    ...useMapDispatchToProps(),
  };
};

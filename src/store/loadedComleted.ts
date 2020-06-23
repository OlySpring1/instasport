import { Action } from 'redux';

const LOAD_COMPLETED = 'LOAD_COMPLETED';

export const setIsLoaded = () => ({ type: LOAD_COMPLETED });

type setIsLoaded = Action<typeof LOAD_COMPLETED>;

type AllowedActions = setIsLoaded;

const reducer = (isLoaded = false, action: AllowedActions) => {
  switch (action.type) {
    case LOAD_COMPLETED:
      return true;

    default:
      return isLoaded;
  }
};

export default reducer;

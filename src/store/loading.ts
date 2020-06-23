import { Action } from 'redux';

const START_LOADING = 'START_LOADING';
const FINISH_LOADING = 'FINISH_LOADING';

export const startLoading = () => ({ type: START_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });

type startLoading = Action<typeof START_LOADING>;
type finishLoading = Action<typeof FINISH_LOADING>;
type AllowedActions = startLoading | finishLoading;


const reducer = (loading = false, action: AllowedActions) => {
  switch (action.type) {
    case START_LOADING:
      return true;

    case FINISH_LOADING:
      return false;

    default:
      return loading;
  }
};

export default reducer;

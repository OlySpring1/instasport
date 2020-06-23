import { Action } from 'redux';
const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (message: string) => ({ type: SET_MESSAGE, message });

type setClubs = Action<typeof SET_MESSAGE> & {
  message: string;
};

type AllowedActions = setClubs;

const reducer = (message = '', action: AllowedActions) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.message;
    default:
      return message;
  }
};

export default reducer;

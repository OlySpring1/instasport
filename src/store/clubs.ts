import { Action } from 'redux';

const SET_CLUB = 'SET_CLUB';

export const setClubs = (clubs: SportClub[]) => (
  {
    type: SET_CLUB,
    clubs,
  }
);

type setClubs = Action<typeof SET_CLUB> & {
  clubs: SportClub[];
};

type AllowedActions = setClubs;

const reducer = (clubs: SportClub[] = [], action: AllowedActions) => {
  switch (action.type) {
    case SET_CLUB:
      return action.clubs;
    default:
      return clubs;
  }
}

export default reducer;

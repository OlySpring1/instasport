import { Action } from 'redux';

const SET_SELECT_CITY = 'SET_SELECT_CITY';
const RESET_CITY = 'RESET_CITY';

export const setSelectCity = (selectCity: string) => (
  {
    type: SET_SELECT_CITY,
    selectCity,
  }
);

export const setRsetCity = () => (
  {
    type: RESET_CITY,
  }
);

type setSelectCity = Action<typeof SET_SELECT_CITY> & {
  selectCity: string;
}

type setRsetCity = Action<typeof RESET_CITY>

type AllowedActions = setSelectCity | setRsetCity;

let initState: string = '';

if (localStorage.getItem('selectCity')) {
  initState = JSON.parse(localStorage.getItem('selectCity') || '');
}

const reducer = (selectCity = initState, action: AllowedActions) => {
  switch (action.type) {
    case SET_SELECT_CITY:
      return action.selectCity;
    case RESET_CITY:
      return '';
    default:
      return selectCity;
  }
}

export default reducer;

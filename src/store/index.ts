import {
  createStore, combineReducers, applyMiddleware, Action,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from "reselect";
import { Dispatch } from 'react';
import loadingReducer, { finishLoading, startLoading } from './loading';
import messageReducer, { setMessage } from './message';
import isLoadReducer, { setIsLoaded } from './loadedComleted';

import {getData } from '../helpers/api';
import clubs, {setClubs} from './clubs';
import cityReduser from './city';

const rootReducer = combineReducers({
  clubs,
  selectCity: cityReduser,
  loading: loadingReducer,
  loaded: isLoadReducer,
  message: messageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const getLoading = (state: RootState) => state.loading;
export const getMessage = (state: RootState) => state.message;
export const getLoaded = (state: RootState) => state.loaded;
export const getClubs = (state: RootState) => state.clubs;
export const getCity = (state: RootState) => state.selectCity;

export const loadData = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(startLoading());

    getData()
      .then(clubsFromServer => {
        dispatch(finishLoading());
        dispatch(setClubs(clubsFromServer));
        dispatch(setIsLoaded());
      })
      .catch(() => {
        dispatch(setMessage('Oops! Something went wrong... :('));
      });
  };
};

export const getClubsInCity = createSelector(
  getClubs, 
  getCity,
  
  (clubs, selectCity) => {
     return selectCity ?
     clubs.filter((club: SportClub) => club.city.slug === selectCity)
    : clubs
}) 

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;


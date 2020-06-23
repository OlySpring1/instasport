import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Ad from './components/Ad/Ad';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ClubsPage from './components/ClubsPage/ClubsPage';
import {
  loadData,
  getCity,
  getLoading,
  getLoaded,
} from './store/index';
import Loading from './components/Loading/Loading';

const App = () => {
  const selectCity = useSelector(getCity);
  const isLoaded = useSelector(getLoaded);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('selectCity', JSON.stringify(selectCity));
  }, [selectCity]);

  return (
    <div className="App">
      {isLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {isLoaded && (
        <>
          <Header />
          <main>
            <Ad />
            <ClubsPage />
          </main>
        </>
      )}
      <Redirect exact from="/" to="/club" />
    </div >
  )
}

export default App;

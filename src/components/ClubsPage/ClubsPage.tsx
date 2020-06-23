import React, { useState, useEffect } from 'react';
import './ClubsPage.scss';
import { useSelector } from 'react-redux';
import {
  getClubsInCity,
} from '../../store/index';
import CityList from '../CityList/CityList';
import ActivityList from '../ActivityList/ActivityList';
import ClubList from '../ClubList/ClubList';

const ClubsPage = () => {
  const visibleClubsInCity = useSelector(getClubsInCity);
  const [visibleClubs, setVisibleClubs] = useState(visibleClubsInCity)

  useEffect(() => (
    setVisibleClubs(visibleClubsInCity)
  ), [visibleClubsInCity]);

  const getClubsWithSelectActivity =  (selectActivity: string) => {
      setVisibleClubs(visibleClubsInCity.filter(club => (
        club.activity.find(activity => activity.slug === selectActivity)
      )))
    };


  const resetActivity = () => {
    setVisibleClubs(visibleClubsInCity);
  };

  return (
    <div className="container">
      <CityList />
      <ActivityList 
        selectActivity={getClubsWithSelectActivity}
        resetActivity={resetActivity}
      />
     <ClubList visibleClubs={visibleClubs}/>

    </div>
  )
}
export default ClubsPage;
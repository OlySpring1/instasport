import React, { useMemo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CityList.scss';
import {
  getClubs,
} from '../../store/index';
import { setSelectCity, setRsetCity } from '../../store/city';

const CityList = () => {
  const clubs = useSelector(getClubs);
  const dispatch = useDispatch();
  const objForComparison: objForComparison = {};

  const cities = useMemo(() => (
    clubs.map((club: SportClub) => club.city)
  ), [clubs]);

  const uniqCity = useMemo(() => {
    return cities.filter((city) => {
      return city.slug in objForComparison ?
        0
        : (objForComparison
        [city.slug] = 1)
    })
  }, [cities, objForComparison])

  return (
    <section className="cities">

      <ul className="cityList">
        <Link
          to="/city"
          className="refreshCity-btn"
          onClick={() => dispatch(setRsetCity())}
        />
        {uniqCity.map((city) => (
          <React.Fragment key={city.slug}>
            <NavLink
              to={`/city/${city.slug}`}
              exact
              className="cityList__link"
              activeClassName='is-active'
              onClick={() => dispatch(setSelectCity(city.slug))
              }
            >
              {city.title}
            </NavLink>
          </React.Fragment>
        ))}
      </ul>
    </section>
  )
}

export default CityList;
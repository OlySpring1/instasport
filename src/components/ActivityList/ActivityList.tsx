import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './ActivityList.scss';
import {
  getClubsInCity,
} from '../../store/index';

type ActivityListProps = {
  selectActivity: (activity: string) => void;
  resetActivity: () => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ selectActivity, resetActivity }) => {
  const visibleClubsInCity = useSelector(getClubsInCity);

  const activities = useMemo(() => (
    visibleClubsInCity.map((club: SportClub) => (
      club.activity.map((item: Activity) => item.slug))
    )
  ), [visibleClubsInCity])

  const uniqActivities = useMemo(() => (
    Array.from(new Set(activities.reduce((acm, activity) => [...acm, ...activity], [])))
  ), [activities])

  return (
    <section className="activities">

      <ul className="activityList">
        <button
          type="button"
          className="refresh-btn"
          onClick={() => resetActivity()}
        >
        </button>
        {uniqActivities
          .map((activity) => (
            <li
              className="activityList__item"
              key={activity}
            >
              <button
                type="button"
                className="activityList__btn"
                onClick={() =>
                  selectActivity(activity)
                }
              >
                {activity}
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
export default ActivityList;
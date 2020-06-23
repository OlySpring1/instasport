import React from 'react';
import Club from '../CartClub/CartClub';

type ClubListProps = {
  visibleClubs: SportClub[];
}
const ClubList:React.FC<ClubListProps> = ({visibleClubs}) => {
  
  return (
    <section className="clubs">
    <ul className="clubList">
      {visibleClubs.map((club) => (
        <Club
          key={club.link}
          club={club}
        />
      ))
      }
    </ul>
  </section>
  )
}
export default ClubList;
import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './ClubList.scss';
import Club from '../CartClub/CartClub';

type ClubListProps = {
  visibleClubs: SportClub[];
}
const ClubList: React.FC<ClubListProps> = ({ visibleClubs }) => {
  return (
    <TransitionGroup className="todo-list clubList">
      {visibleClubs.map((club) => (
        <CSSTransition
          key={club.link}
          timeout={500}
          classNames="club"
        >
          <Club club={club} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default ClubList;
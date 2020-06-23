import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const navList = [
  {
    title: 'Клубы',
    link: '/club',
  },
  {
    title: 'Анонсы',
    link: '/announce',
  },
  {
    title: 'Блог',
    link: '/blog',
  },
];


const Header = () => {
  return (
    <header className="header">
      <a
        href="https://instasport.co/landing/"
        target="_blank"
        rel="noopener noreferrer"
        className="header__logo logo">
        Instasport
    </a>
      <nav>
        <ul className="nav__list">
          {navList.map(item => (
            <li key={item.title} className="nav__item">
              <NavLink
                to={item.link}
                className="nav__link"
                activeClassName="nav__link--active"
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
export default Header;
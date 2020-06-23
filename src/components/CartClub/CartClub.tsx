import React from 'react';
import './CartClub.scss';

type CartClub = {
  club: SportClub,
}

const CartClub: React.FC<CartClub> = ({ club }) => {
  console.log(club.logo);
  console.log(club);
  const errorLogo = /.jpg|.svg|.png/g.test(club.logo);
  console.log('errorLogo', errorLogo);

  return (
    <li
      key={club.link}
      className="clubList__item cartClub"
    >
      <a
        href={club.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cartClub__link"
      >
        {errorLogo ? (
          <img
            src={club.logo}
            alt="logo club"
            className="cartClub__logo"
          />
        )

          : <div className="cartClub__logo logo-title">
            {club.title}
          </div>

        }
      </a>
      <p className="cartClub__title">
        {club.title_short}
      </p>
    </li>

  )
}

export default CartClub;
import React from 'react';
import './Ad.scss';

const Ad = () => (
  <div className="container">
    <blockquote className="blockquote text-right">
      <p className="blockquote__text-right">
        Для записи на тренировку теперь достаточно пару касаний!
  </p>
      <footer >
        <cite title="Source Title" className="blockquote__footer">
          - Instasport
      </cite>
      </footer>
    </blockquote>
    <div className="ads">
      <h1 className="ads__title" >
        Запись на тренировки онлайн
      </h1>
      <p className="ads__content" >
        На нашем сайте вы сможете:
      </p>
      <ul className="ads__list">
        <li><p><small>Узнать расписание тренировок в спортивных клубах</small></p></li>
        <li><p><small>Записаться на тренировку</small></p></li>
        <li><p><small>Выбрать абонемент и оплатить его кредитной картой</small></p></li>
      </ul>
    </div>
  </div>
)
export default Ad;
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
    <div className="box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="ads">
        <h1 className="ads__title" >
          Выбери свой клуб
      </h1>
      </div>
    </div>
  </div>
)
export default Ad;
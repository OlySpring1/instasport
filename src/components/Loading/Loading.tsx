import React from 'react';
import './Loading.css';
import { useSelector } from 'react-redux';

import {
  getLoaded,
  getMessage,
} from '../../store/index';


// type Props = {
//   isLoaded: boolean;
//   errorMessage: string;
// };

const Loading = () => {
  const isLoaded = useSelector(getLoaded);
  const errorMessage = useSelector(getMessage);
  return (
    <div className={(isLoaded || errorMessage !== '') ? '' : 'lds-roller'}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
  )

};

export default Loading;

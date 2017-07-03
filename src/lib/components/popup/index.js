import React from 'react';
import { popup, popupContent } from './style.css';

const Popup = props =>
  <div className={popup}>
    <div className={popupContent}>
      <div className="popupContent">
        {props.children}
      </div>
    </div>
  </div>
;

export default Popup;

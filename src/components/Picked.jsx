import React from 'react';
import Option from './Option';
import '../styles/components/Picked.css';
import NoOption from './NoOption';
import Victorious from './Victorious';

const Picked = () => {
  return (
    <div className="picked-options winner">
      <div className="picked-options-container">
        <h2>You picked</h2>
        <Option option="rock" />
      </div>
      <Victorious />
      <div className="picked-options-container">
        <h2>The house picked</h2>
        <NoOption />
        <Option option="rock" />
      </div>
    </div>
  );
};

export default Picked;
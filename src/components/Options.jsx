import React from 'react';
import Option from './Option';
import '../styles/components/Options.css';

const Options = () => {
  return (
    <div className="options">
      <Option option="paper" />
      <Option option="scissors" />
      <Option option="rock" />
    </div>
  );
};

export default Options;
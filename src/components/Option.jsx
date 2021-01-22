import React from 'react';
import '../styles/components/Option.css';

const Option = ({ option }) => {
  return (
    <div className={`options-btn options-btn-${option}`}>
      <button>
        <img src={`./images/icon-${option}.svg`} alt={`${option} option`} />
      </button>
    </div>
  );
};

export default Option;
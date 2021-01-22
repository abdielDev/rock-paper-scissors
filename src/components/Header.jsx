import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="./images/logo.svg" alt="Game logo" />
      <div className="score">
        <h3>Score</h3>
        <h1>12</h1>
      </div>
    </div>
  );
};

export default Header;
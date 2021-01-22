import React from 'react';
import Header from './Header';
import Options from './Options';
import "../styles/reset.css";
import "../styles/components/App.css";


const App = () => {
  return (
    <main className="app">
      <Header />
      <Options />
      <button className="rules-btn">Rules</button>
    </main>
  );
};

export default App;
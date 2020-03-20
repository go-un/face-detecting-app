import React from 'react';
import chart from './chart.svg';

const Logo = () => {
  return (
    <div className="App-logo">
      <a href="/" className="App-logo-link">
        <img src={chart} alt="Magnifing Glass Logo Icon" className="App-logo-image"/>
      </a>
    </div>
  );
};

export default Logo;
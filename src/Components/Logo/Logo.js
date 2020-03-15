import React from 'react';
import Tilt from 'react-tilt';
import chart from './chart.svg';

const Logo = () => {
  return (
    <div className="App-logo">
      <Tilt className="App-logo-tilt" options={{ max : 25 }}>
        <a href="/" className="App-logo-link">
          <img src={chart} alt="Magnifing Glass Logo Icon" className="App-logo-image"/>
        </a>
      </Tilt>
    </div>
  );
};

export default Logo;
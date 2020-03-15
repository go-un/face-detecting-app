import React from 'react';
import Tilt from 'react-tilt';

const ImageLinkForm = () => {
  return (
    <div className="App-form">
      <p className="App-form-text">
        {'This Magic Magnifing Glass will detect faces in your pictures. Git it a TRY!'}
      </p>
      <Tilt className="App-form-inputbox bg-rainbow">
        <input type="text" className="App-form-input"/>
        <button className="App-form-button bg-microbialmat">Detect</button>
      </Tilt>
    </div>
  );
};

export default ImageLinkForm;
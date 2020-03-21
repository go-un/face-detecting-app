import React from 'react';
import Tilt from 'react-tilt';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="App-image-link-form">
      <p className="App-text">
        {'This Magic Magnifing Glass will detect faces in your pictures. Git it a TRY!'}
      </p>
      <Tilt className="App-inputbox bg-rainbow">
        <input type="text" className="App-input" placeholder="Paste Image URL" onChange={ onInputChange } />
        <button className="App-button-submit bg-microbialmat" onClick={ onButtonSubmit }>Detect</button>
      </Tilt>
    </div>
  );
};

export default ImageLinkForm;
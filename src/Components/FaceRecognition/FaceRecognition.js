import React from 'react';

const FaceRecognition = ({ detectedFaces, imageUrl }) => {
  return (
    <div className="App-face-recognition">
      <img id="face-recognition-image" className="App-image" src={imageUrl} alt="" />
      { detectedFaces.length ? <div className="App-text">{detectedFaces.length + ' Faces detected in the photo'}</div> : ''}
      <div className="bounding-boxes">
        {detectedFaces.map((face) => {
          let boundingBox = face.region_info.bounding_box;
          return (
            <div className="bounding-box" key={face.id} style={{
              top: boundingBox.top_row * 100 + '%',
              left: boundingBox.left_col * 100 + '%',
              width: (boundingBox.right_col - boundingBox.left_col) * 100 + '%',
              height: (boundingBox.bottom_row - boundingBox.top_row) * 100 + '%',
              }}>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
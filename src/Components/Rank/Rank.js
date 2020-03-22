import React from 'react';

const Rank = ({ user }) => {
  return (
    <div className="App-rank">
      <div className="App-text">
        { user.name + ', your current rank is...'}
      </div>
      <em className="App-text-em">
        {'#' + user.entries}
      </em>
    </div>
  );
};

export default Rank;
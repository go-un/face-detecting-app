import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <form className="App-register" action="" method="">
      <em className="App-text-em">Register</em>
      <div className="container">
        <label htmlFor="name" className="App-label"><b>Name</b></label>
        <input className="App-input-info" type="text" placeholder="Enter Name" id="name" required />

        <label htmlFor="email" className="App-label"><b>Email</b></label>
        <input className="App-input-info" type="text" placeholder="Enter Email" id="email" required />

        <label htmlFor="psw" className="App-label"><b>Password</b></label>
        <input className="App-input-info" type="password" placeholder="Enter Password" id="psw" required />
            
        <button className="App-button-signin" type="submit">Sign Up</button>
      </div>

      <div className="container">
        <button type="button" className="App-button-cancle" onClick={ () => onRouteChange('home') }>Cancel</button>
      </div>
    </form>
  )
};

export default Register;
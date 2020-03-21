import React from 'react';

const SignIn = ({ onRouteChange, onSignedInChange }) => {
  return (
    <form className="App-sign-in" action="" method="">
      <em className="App-text-em">Sign In</em>
      <div className="container">
        <label htmlFor="email" className="App-label"><b>Email</b></label>
        <input className="App-input-info" type="text" placeholder="Enter Email" id="email" required />

        <label htmlFor="psw" className="App-label"><b>Password</b></label>
        <input className="App-input-info" type="password" placeholder="Enter Password" id="psw" required />
            
        <button className="App-button-signin" type="submit" onClick={ (e) => { onSignedInChange(true); onRouteChange('home'); e.preventDefault(); } }>Login</button>

        <input className="App-input-info" type="checkbox" id="remember" />
        <label htmlFor="remember" className="App-label">Remember me</label>

        <span className="App-sign-in-subtext">Forgot <a href="#none">password?</a></span>
      </div>

      <div className="container">
        <button type="button" className="App-button-cancle" onClick={ () => onRouteChange('home') }>Cancel</button>
      </div>
    </form>
  )
};

export default SignIn;
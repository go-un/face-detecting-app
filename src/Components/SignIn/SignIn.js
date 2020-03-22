import React, {Component} from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  };

  onSubmitSignIn = () => {
    const { onRouteChange, onSignedInChange } = this.props;
    
		fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
			.then( response => response.json() )
      .then( (data) => {
        console.log(data);
        if(typeof data === 'object') {
          onSignedInChange(data);
          onRouteChange('home');
        } else {
          alert(data);
        }
      });
  };
  
  render() {
    const { onRouteChange } = this.props;

    return (
      <form className="App-sign-in" action="" method="">
        <em className="App-text-em">Sign In</em>
        <div className="container">
          <label htmlFor="email" className="App-label"><b>Email</b></label>
          <input className="App-input-info" type="text" placeholder="Enter Email" id="email" onChange={this.onEmailChange} required />
  
          <label htmlFor="psw" className="App-label"><b>Password</b></label>
          <input className="App-input-info" type="password" placeholder="Enter Password" id="psw" onChange={this.onPasswordChange} required />
              
          <button className="App-button-signin" type="submit" onClick={ (e) => { this.onSubmitSignIn(); e.preventDefault(); } }>Login</button>
  
          <input className="App-input-info" type="checkbox" id="remember" />
          <label htmlFor="remember" className="App-label">Remember me</label>
  
          <span className="App-sign-in-subtext">Forgot <a href="#none">password?</a></span>
        </div>
  
        <div className="container">
          <button type="button" className="App-button-cancle" onClick={ () => onRouteChange('home') }>Cancel</button>
        </div>
      </form>
    )
  }
}

export default SignIn;
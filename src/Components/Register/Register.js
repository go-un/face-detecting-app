import React, {Component} from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  };

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  };

  onSubmitRegister = () => {
    const { onRouteChange } = this.props;
    let alreadyExisted = false;

    fetch('http://localhost:3001/', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
      .then( response => response.json() )
      .then( users => {
        console.log(users);
        users.forEach( user => {
          if(user.email === this.state.email) {
            alreadyExisted = true;
          }
        });
      })
      .then( () => {
        if(alreadyExisted) {
          alert("Already existed!")
        } else {
          fetch('http://localhost:3001/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              password: this.state.password
            })
          })
            .then( response => response.json() )
            .then( user => {
              if (user) {
                console.log(user);
                onRouteChange('signin');
              }
            });
        }
      })
  };
  
  render() {
    const { onRouteChange } = this.props;

    return (
      <form className="App-register" action="" method="">
        <em className="App-text-em">Register</em>
        <div className="container">
          <label htmlFor="name" className="App-label"><b>Name</b></label>
          <input className="App-input-info" type="text" placeholder="Enter Name" id="name" onChange={this.onNameChange} required />
  
          <label htmlFor="email" className="App-label"><b>Email</b></label>
          <input className="App-input-info" type="text" placeholder="Enter Email" id="email" onChange={this.onEmailChange} required />
  
          <label htmlFor="psw" className="App-label"><b>Password</b></label>
          <input className="App-input-info" type="password" placeholder="Enter Password" id="psw" onChange={this.onPasswordChange} required />
              
          <button className="App-button-signin" type="submit" onClick={ (e) => { this.onSubmitRegister(); e.preventDefault(); } }>Sign Up</button>
        </div>
  
        <div className="container">
          <button type="button" className="App-button-cancle" onClick={ () => onRouteChange('home') }>Cancel</button>
        </div>
      </form>
    )
  }
}

export default Register;
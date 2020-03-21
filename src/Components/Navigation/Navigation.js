import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, onSignedInChange }) => {
	if(isSignedIn) {
		return (
			<nav className="App-navigation">
				<button className="App-navigation-link" onClick={ () => onRouteChange('home') }>Home</button>
				<button className="App-navigation-link" onClick={ () => { onSignedInChange(false); onRouteChange('home') } }>Sign Out</button> :
			</nav>
		)
	} else {
		return (
			<nav className="App-navigation">
				<button className="App-navigation-link" onClick={ () => onRouteChange('home') }>Home</button>
				<button className="App-navigation-link" onClick={ () => onRouteChange('signin') }>Sign In</button>
				<button className="App-navigation-link" onClick={ () => onRouteChange('register') }>Register</button>
			</nav>
		);
	}
};

export default Navigation;
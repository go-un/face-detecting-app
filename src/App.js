import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOption = {
	particles: {
		line_linked: {
			shadow: {
				enable: true,
				color: "#3CA9D1",
				blur: 10
			}
		}
	}
};

function App() {
  return (
    <div className="App">
			<Particles params={{particlesOption}} className="App-particles" />
      <Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm />
    </div>
  );
}


export default App;

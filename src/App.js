import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
 apiKey: '0eb3c1090dda4ebcba238ca660b766c0'
});

const particlesOption = {
	"particles": {
		"number": {
			"value": 10,
			"density": {
				"enable": true,
				"value_area": 1000
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 10,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 80,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 300,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 2
		},
		"move": {
			"enable": true,
			"speed": 12,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 800,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 800,
				"size": 80,
				"duration": 2,
				"opacity": 0.8,
				"speed": 3
			},
			"repulse": {
				"distance": 400,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
};


class App extends Component {
	constructor() {
		super();
		this.state = {
			input: ''
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	onButtonSubmit = () => {
		console.log('click');
		app.models.predict( Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/face-det.jpg').then(
			function(response) {
				console.log(response.outputs[0].data.concepts);
			},
			function(err) {
				// there was an error
			}
		);
	};

	render() {
		return (
			<div className="App">
				<Particles 
					params={particlesOption} 
					className="App-particles" 
				/> 
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm 
					onInputChange={this.onInputChange} 
					onButtonSubmit={this.onButtonSubmit} 
				/>
				<FaceRecognition />
			</div>
		);
	}
}


export default App;

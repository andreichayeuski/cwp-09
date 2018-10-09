const Promise = require('bluebird');
const axios = require('axios');

axios.get('https://pokeapi.co/api/v2/pokemon/42')
	.then((response) => {
		console.log(`Pokemon 42:\n${response.data.name}\nweight:${response.data.weight}, height:${response.data.height}`);
	}).catch((err) => {
	console.log(`Error load pokemon with id 42: ${err}`);
	});

const Promise = require('bluebird');
const axios = require('axios');

//task 01.1
axios.get('https://pokeapi.co/api/v2/pokemon/42')
	.then((response) => {
		console.log(`Pokemon 42:\n${response.data.name}\nweight:${response.data.weight}, height:${response.data.height}`);
	}).catch((err) => {
	console.log(`Error load pokemon with id 42: ${err}`);
	});

//task 01.2
let allPromises = [];
const count = 10;
for (let i=0; i<3; i++)
{
	allPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${count}&offset=${count*i}`));
}

Promise.all(allPromises)
	.then((res) => {
		res.forEach((val, resInd)=>{
			val.data.results.forEach((pokemon, ind) => {
				console.log(`${resInd}-${ind}: ${pokemon.name}`);
			})
		})
	}).catch((err) => {
	console.log(`Error throw 30 pokemons loading: ${err}`);
	});

//task 01.3
let anyPromises = [];
anyPromises.push(axios.get('https://pokeapi.co/api/v2/pokemon/1'));
anyPromises.push(axios.get('https://pokeapi.co/api/v2/pokemon/4'));
anyPromises.push(axios.get('https://pokeapi.co/api/v2/pokemon/7'));

Promise.any(anyPromises).then((result) => {
	console.log(`Pokemon name: ${result.data.name}`);
}).catch((err) => {
	console.log(`Error throw pokemons loading with id's: 1, 4, 7 - ${err}`);
});

//task 01.4
Promise.props({
	pokemons: axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`),
	items: axios.get(`https://pokeapi.co/api/v2/item/?limit=10`),
	locations: axios.get(`https://pokeapi.co/api/v2/location/?limit=10`)
}).then((result) => {
	console.log('Pokemons: \n');
	result['pokemons'].data.results.forEach((v) => {
		console.log(v.name);
	});
	console.log('Items: \n');
	result['items'].data.results.forEach((v) => {
		console.log(v.name);
	});
	console.log('Locations: \n');
	result['locations'].data.results.forEach((v) => {
		console.log(v.name);
	});
}).catch((err) => {
	console.log(`Error throw pokemons, items, locations loading :${err}`);
});

//task 01.5
Promise.map([1, 2, 3, 4], (i) => {
	return axios.get(`http://pokeapi.co/api/v2/berry/${i}`)
}).then((result) => {
	console.log('Berries: ');
	result.forEach((berry) => {
		console.log(berry.data.name);
	})
}).catch((err) => {
	console.log(`Error load berries: ${err}`);
});
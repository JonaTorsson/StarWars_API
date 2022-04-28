/**
 * Starwars API
 * 
 */

import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

// Get ALL films
const getFilms = async () => {
	const res = await axios.get(`${BASE_URL}/films`)
	return res.data
}

// Get SPECIFIC film
const getFilm = async (id) => {
	const res = await axios.get(`${BASE_URL}/films/${id}`)
	return res.data
}

// Get ALL characters
const getCharacters = async (page) => {
	const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
	return res.data
}

// Get SPECIFIC character
const getCharacter = async (id) => {
	const res = await axios.get(`${BASE_URL}/people/${id}`)
	return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getFilms,
	getFilm,
	getCharacters,
	getCharacter
}
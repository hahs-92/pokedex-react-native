import AsyncStorage from "@react-native-async-storage/async-storage";
//utils
import { FAVORITE_STORAGE } from '../utils/constants'


export async function addPokemonFavorite(pokemonId) {
    try {
        const favorites = await getPokemonFavorite()
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify([...favorites, pokemonId]))
    } catch (error) {
        throw error
    }
}

export async function getPokemonFavorite() {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(response || '[]')
    } catch (error) {
        throw error
    }
}

export async function isPokemonFavorite(pokemonId) {
    try {
        const response = await getPokemonFavorite()
        return response.includes(pokemonId)
    } catch (error) {
        throw error
    }
}

export async function removePokemonFavorite(pokemonId) {
    try {
        const favorites = await getPokemonFavorite()
        const filters = await favorites.filter(pokeid => pokeid !== pokemonId)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(filters))
    } catch (error) {
        throw error
    }
}

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
        return JSON.parse(response || [])
    } catch (error) {
        throw error
    }
}
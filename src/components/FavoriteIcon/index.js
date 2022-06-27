import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
//utlis
import { addPokemonFavorite, isPokemonFavorite, removePokemonFavorite } from '../../api/favorite';

export default function FavoriteIcon({ pokemonId }) {
    const [isFavorite, setIsFavorite ] = useState(undefined)

    const addFavorite = async () => {
        try {
            await addPokemonFavorite(pokemonId)
            setIsFavorite(true)
        } catch (error) {
            console.error(error)
        }
    }

    const isCheckFavorite = async() => {
        try {
            const response = await isPokemonFavorite(pokemonId)
            setIsFavorite(response)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteFavorite = async() => {
        try {
            await removePokemonFavorite(pokemonId)
            setIsFavorite(false)
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
        isCheckFavorite()
    },[pokemonId])

    return (
        <AntDesign
            name={ isFavorite ? "heart" : "hearto"}
            color="#fff"
            size={30}
            onPress={isFavorite ? deleteFavorite : addFavorite }
        />
    )
}

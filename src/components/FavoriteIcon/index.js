import { AntDesign } from '@expo/vector-icons';
//utlis
import { addPokemonFavorite, getPokemonFavorite } from '../../api/favorite';

export default function FavoriteIcon({ pokemonId }) {
    const addFavorite = async () => {
        await addPokemonFavorite(pokemonId)
    }

    const getFavorite = async() => {
        const response = await getPokemonFavorite()
        console.log(response)
    }

    return (
        <AntDesign
            name='hearto'
            color="#fff"
            size={30}
            onPress={ addFavorite }
        />
    )
}
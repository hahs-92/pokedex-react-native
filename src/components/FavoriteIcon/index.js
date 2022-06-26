import { AntDesign } from '@expo/vector-icons';

export default function FavoriteIcon({ pokemonId }) {
    const addFavorite = () => {
        console.log("add: ", pokemonId)
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
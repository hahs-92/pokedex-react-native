import { View, Text, StyleSheet } from 'react-native'
import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
//api
import { getPokemonFavorite } from '../../api/favorite'
import { getPokemonDetailById } from '../../api/pokemon'
//hooks
import { useAuth } from '../../hooks/useAuth'
//components
import PokemonList from '../../components/PokemonList'
import NoLogged from '../../components/NoLogged'

export default function Favorite() {
    const [ pokemons, setPokemons ] = useState([])
    const { auth } = useAuth()

    const getFavorites = async () => {
        try {
            const response = await getPokemonFavorite()

            const promises = await response.map(async(pokeId) => getPokemonDetailById(pokeId))
            const pokes = await Promise.all(promises)
            const data = pokes.map(poke => {
                const normalizeData =  {
                    id:poke.id,
                    name:poke.name,
                    type:poke.types[0].type.name,
                    order:poke.order,
                    image:poke.sprites.other['official-artwork'].front_default
                }
                return normalizeData
            })

            setPokemons([...pokemons, ...data])
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     auth && getFavorites()
    // },[auth])

    useFocusEffect(
        useCallback(() => {
            auth && getFavorites()
        },[ auth])
    )

    return (
       <View style={ styles.container }>
        {  !auth &&  <NoLogged /> }
        {
            auth && pokemons.length > 0
                ? <PokemonList pokemons={ pokemons} />
                : <Text style={ styles.title }>Add some pokemon¡</Text>
        }
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        height: "100%",
        backgroundColor: "#fff"
    },
    title: {
        marginTop: 40,
        textAlign: "center",
        fontSize:20
    }
})
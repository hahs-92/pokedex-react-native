import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
//api
import { getPokemonDetailById } from '../../api/pokemon'

export default function Pokemon({route, navigation }) {
    const [pokemon, setPokemon ] = useState(null)

    const getPokemon = async() => {
        try {
            const response = await getPokemonDetailById(route.params.id)
            setPokemon(response)
        } catch (error) {
            console.log(error)
            navigation.goBack()
        }
    }

    useEffect(() => {
        getPokemon()
    },[route.params])

    return (
        <View style={ {marginTop: 20 }}>
            <Text>{ pokemon?.name }</Text>
        </View>
    )
}
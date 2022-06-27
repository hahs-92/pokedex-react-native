import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
//api
import { getPokemonFavorite } from '../../api/favorite'

export default function Favorite() {
    const [ favorites, setFavorites ] = useState([])

    const getFavorites = async () => {
        try {
            const response = await getPokemonFavorite()
            setFavorites(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFavorites()
    },[])

    console.log(favorites)
    return (
        <View>
        <Text>Favorite!</Text>
        </View>
    )
}
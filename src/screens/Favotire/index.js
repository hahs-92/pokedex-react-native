import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
//api
import { getPokemonFavorite } from '../../api/favorite'

export default function Favorite() {
    const [ favorites, setFavorites ] = useState([])

    const getFavorites = async () => {
        try {
            const response = await getPokemonFavorite()
            console.log(response)
            setFavorites(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFavorites()
    },[favorites.length])

    return (
        <View>
        <Text>Favorite!</Text>
        </View>
    )
}
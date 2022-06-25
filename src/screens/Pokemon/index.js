import { StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
//api
import { getPokemonDetailById } from '../../api/pokemon'
//components
import HeaderPokemon from '../../components/HeaderPokemon'

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
       <ScrollView style={styles.container}>
        <HeaderPokemon
            name={ pokemon?.name}
            order={ pokemon?.order }
            image={pokemon?.sprites.other['official-artwork'].front_default}
            type={ pokemon?.types[0].type.name }
        />
       </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
    marginTop: 20,
  }
});

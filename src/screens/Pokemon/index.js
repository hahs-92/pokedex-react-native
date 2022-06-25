import { StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
//api
import { getPokemonDetailById } from '../../api/pokemon'
//components
import HeaderPokemon from '../../components/HeaderPokemon'
import TypePokemon from '../../components/TypePokemon'
import Stats from '../../components/Stats'

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
        navigation?.setOptions({
            headerRight: () => null,
            headerLeft: () => (
                <AntDesign
                    name="leftcircleo"
                    size={30}
                    color="#fff"
                    onPress={navigation.goBack}
                />
            )
        })
    }, [route.params, navigation])

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
        <TypePokemon types={pokemon?.types } />
        <Stats  stats={ pokemon?.stats } type={ pokemon?.types[0].type.name } />
       </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
    marginTop: 20,
  }
});

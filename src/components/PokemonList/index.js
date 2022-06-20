import { FlatList, View, StyleSheet } from 'react-native'
//components
import PokemonCard from '../PokemonCard'

export default function PokemonList({pokemons}) {
    return (
        <View style={styles.list}>
            <FlatList
                data={ pokemons}
                // numColumns={ 2 }
                showsVerticalScrollIndicator={ false } //no aparseca la barra de scroll
                keyExtractor={(poke) => String(poke.id)}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
                // contentContainerStyle={ styles.listContainer }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        padding: 10,
        width: "100%",
        // paddingHorizontal: 5,
    }
})
import { FlatList, View, StyleSheet, ActivityIndicator, Platform } from 'react-native'
//components
import PokemonCard from '../PokemonCard'

export default function PokemonList({pokemons, loadPokemons, isNext}) {

    const loadMorePokes = () => {
        loadPokemons()
    }
    return (
        <View style={styles.list}>
            <FlatList
                data={ pokemons}
                // numColumns={ 2 }
                showsVerticalScrollIndicator={ false } //no aparseca la barra de scroll
                keyExtractor={(poke) => String(poke.id)}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
                // contentContainerStyle={ styles.listContainer }
                onEndReached={ isNext &&loadMorePokes }
                onEndReachedThreshold={ 0.1 }
                ListFooterComponent={
                    isNext && (
                        <ActivityIndicator
                            size="large"
                            style={ styles.spinner }
                        />
                    )
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        marginTop: Platform.OS === 'android' ? 10 : 0,
        padding: 10,
        width: "100%",
        // paddingHorizontal: 5,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60
    }
})
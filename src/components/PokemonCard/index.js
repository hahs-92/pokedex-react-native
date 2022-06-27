import { View,Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//UTILS
import { getColorByPokemonType } from '../../utils/getColorType'

export default function PokemonCard({ pokemon }) {
    const navigation = useNavigation()

    const typeContainerBg = {
        ...styles.typeContainer,
        backgroundColor: getColorByPokemonType(pokemon?.type)
    }

    const goToPokemon = () => {
        navigation.navigate("Pokemon", { id: pokemon.id })
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.container }>
                <View style={ styles.imageContainer }>
                    <Image source={{uri: pokemon.image }} style={ styles.image } />
                </View>
                <View style={ styles.infoContainer }>
                    <Text style={ styles.order }>N.°{`${ pokemon?.id }`.padStart(3,0)}</Text>
                    <Text style={ styles.name }>{pokemon.name}</Text>
                    <View style={ typeContainerBg } >
                        <Text style={ styles.type }>{pokemon.type}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: "100%"
    },
    imageContainer: {
        backgroundColor: "#f2f2f2"
    },
    image: {
        alignSelf: "center",
        width: "80%",
        height: 300
    },
    infoContainer: {
        padding: 10,
        backgroundColor: "#ffff"
    },
    order: {
        fontSize: 18,
        fontWeight: "800",
        color: "grey"
    },
    name: {
        fontSize: 32,
        textTransform: "capitalize"
    },
    typeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
        backgroundColor: "tomato",
        borderRadius: 5
    },
    type: {
        fontSize: 16,
        color: "#ffff"
    }
})

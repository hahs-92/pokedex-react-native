import { View, Text, StyleSheet } from 'react-native'
//utils
import { getColorByPokemonType } from '../../utils/getColorType'

export default function TypePokemon({ types }) {
    return (
        <View style={ styles.content }>
           {
            types && types.map(type => (
                <View
                    style={ {...styles.typesContainer, backgroundColor: getColorByPokemonType(type?.type.name)}}
                    key={type.type.name }
                >
                    <Text style={ styles.itemType }>{ type.type.name }</Text>
                </View>
            ))
           }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-evenly"
    },
    typesContainer: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20
    },
    itemType: {
        color: "white"
    }
})
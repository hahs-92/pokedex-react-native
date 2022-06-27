import { View, Text, StyleSheet } from 'react-native'
import { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
//api
import { getPokemonFavorite } from '../../api/favorite'
//hooks
import { useAuth } from '../../hooks/useAuth'
//components
import CustomButton from '../CustomButton'


export default function UserData() {
    const { auth, logout } = useAuth()
    const [ total, setTotal ] = useState(0)

    const getPokemons = async() => {
        try {
            const pokemons = await getPokemonFavorite()
            setTotal(pokemons.length)
        } catch (error) {
            console.error(error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            getPokemons()
        },[])
    )

    return (
        <View style={ styles.container }>
            <View style={ styles.titleContainer }>
                <Text style={ styles.title }>Welcome,</Text>
                <Text style={ styles.title }>
                    { `${ auth.firtsName } ${ auth.lastName }`}
                </Text>
            </View>
            <View style={ styles.contentData }>
                <ItemMenu title=" Name: " text={ `${ auth.firtsName } ${ auth.lastName }`} />
                <ItemMenu title=" Username: " text={ auth.username } />
                <ItemMenu title=" Email: " text={ auth.email } />
                <ItemMenu title=" Favorites " text={ `${ total } pokemons` } />
            </View>
            <CustomButton title="Log out" handleOnPress={logout} />
        </View>
    )
}

export function ItemMenu({ title, text }) {
    return (
        <View style={ styles.itemMenu }>
            <Text style={ styles.itemTitle }>{ title }</Text>
            <Text style={ styles.itemText }>{ text }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
    },
    titleContainer: {
        marginBottom: 20
    },
    title: {
        fontSize: 22,
        fontWeight: "800"
    },
    itemMenu: {
        flexDirection: "row",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#cfcfcf",
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: "900"
    },
    itemText: {
        fontSize: 16
    }
})
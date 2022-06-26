import { View, Text, StyleSheet } from 'react-native'
//hooks
import { useAuth } from '../../hooks/useAuth'
//components
import CustomButton from '../CustomButton'


export default function UserData() {
    const { auth, logout } = useAuth()

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
                <ItemMenu title=" Favorites " text={ `${ 0 } pokemons` } />
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
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation  } from '@react-navigation/native'
//components
import CustomButton from '../CustomButton'


export default function NoLogged() {
    const navigation = useNavigation()

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>You must be logged¡</Text>
            <CustomButton title="Go Log In" handleOnPress={ () => navigation.navigate("Account")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        height: "100%"
    },
    title: {
        paddingVertical: 30,
        fontSize: 20,
        textAlign: "center",
    }
})
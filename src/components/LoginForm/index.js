import React from "react";
import { Text, TextInput, Button, View } from 'react-native'


export default function LoginForm() {
    return(
        <View>
            <Text>Login Form</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button title="Enviar" onPress={() => console.log("enviado")} />
        </View>
    )
}

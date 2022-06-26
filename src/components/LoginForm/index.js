import React, { useState } from "react";
import { StyleSheet ,Text, TextInput, Button, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup';
//dummy db
import { user, userDetails  } from '../../utils/userDb'
//hooks
import { useAuth } from  '../../hooks/useAuth'

export default function LoginForm() {
    const [ error, setError ] = useState(null)

    const { auth, login  } = useAuth()

    const formik = useFormik({
        initialValues: { username: "", password: ""},
        validationSchema: yup.object({
            username: yup.string().required("Este Campo es obligatorio"),
            password: yup.string().required("Este campo es obligatorio")
        }),
        //validateOnChange: false, // no evalue los campos en tiempo real
        onSubmit: (formValues) => {
            const { username, password } = formValues

            if(username !== user.username || password !== user.password) {
                setError("El usuario o la contraseña son incorrectos")
                return

            }
            setError(null)
            login(userDetails)
        }
    })
    console.log(auth)
    return(
        <View style={ styles.loginForm }>
            <Text style={ styles.title }>Log In</Text>
            <TextInput
                style={ styles.input }
                placeholder="Email"
                value={ formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text) }
            />
            { formik.errors.username && <Text style={ styles.alert }>{ formik.errors.username }</Text> }

            <TextInput
                style={ styles.input }
                placeholder="Password"
                secureTextEntry={ true }
                value={ formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text) }
            />
            { formik.errors.password && <Text style={ styles.alert }>{ formik.errors.password }</Text> }
            <Button
                title="Send"
                onPress={formik.handleSubmit}
            />
            { error && <Text style={ styles.error }>{ error }</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    loginForm: {
        marginTop: 80,
        padding: 10
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "600"
    },
    input: {
        padding: 10,
        marginVertical: 10,
        height: 60,
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 20,
        fontSize: 16
    },
    alert: {
        marginBottom: 5,
        color: "red",
        fontSize: 12
    },
    error: {
        padding: 40,
        color: "red",
        fontSize: 16,
        textAlign: "center"
    }
})

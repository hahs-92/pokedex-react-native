import { View, Text, Button, StyleSheet } from 'react-native'
//component
import LoginForm from '../../components/LoginForm'
import UserData from '../../components/UserData'
//hooks
import { useAuth } from '../../hooks/useAuth'

export default function Account({navigation}) {
  const { auth } = useAuth()
  return (
    <View style={ styles.account }>
      {
        auth
          ? <UserData />
          : <View>
              <LoginForm />
            </View>
      }

      {/* <Button title='Go first page' onPress={() => navigation.popToTop()} /> */}
      {/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  account: {
    marginTop: 20
  }
})
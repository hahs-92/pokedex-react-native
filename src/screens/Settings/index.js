import { View, Text, Button } from 'react-native'


export default function Settings({navigation}) {
  return (
    <View>
      <Text>Settings</Text>

      <Button title='Go first page' onPress={() => navigation.popToTop()} />
      {/* <Button title='Go back' onPress={() => navigation.goBack()} /> */}
    </View>
  )
}

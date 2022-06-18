import { View, Text, Button } from 'react-native'

//navigation nos lo provee react-native
export default function Home({navigation}) {

  return (
    <View>
      <Text>Home</Text>

      <Button title='Go to Settings' onPress={() => navigation.push('Settings')} />
      {/* <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  )
}
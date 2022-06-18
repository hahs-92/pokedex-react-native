import { View, Text, Button, StyleSheet } from 'react-native'

//navigation nos lo provee stack-navigator
export default function Home({navigation}) {

  return (
    <View style={ styles.home }>
      <Text>Home</Text>

      {/* <Button title='Go to Settings' onPress={() => navigation.push('Settings')} /> */}
      {/* <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

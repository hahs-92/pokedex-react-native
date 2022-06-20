import { View, Text, Button, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
//api
import { getPokemons } from '../../api/pokemon';
//navigation nos lo provee stack-navigator
export default function Home({navigation}) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
      .then(data => setPokemons(data))
      .catch(console.error)
  },[])

  console.log("data: ", pokemons)

  return (
    <View >
      <Text>Hi there!</Text>

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

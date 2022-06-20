import { View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react';
//api
import { getPokemons, getPokemonDetail } from '../../api/pokemon';
//components
import PokemonList from '../../components/PokemonList';
//navigation nos lo provee stack-navigator
export default function Home({navigation}) {
  const [pokemons, setPokemons] = useState([])

  const getFetch = async() => {
    try {
      const response = await getPokemons()
      const result = await response.results
      const promises = await result.map(async(r) => getPokemonDetail(r.url))
      const pokes = await Promise.all(promises)
      setPokemons([...pokemons, ...pokes])

      // getPokemons()
      // .then(response => response.results)
      // .then(pokemon => pokemon.map(poke => getPokemonDetail(poke.url)))
      // .then(promises => Promise.all(promises))
      // .then(data =>{
      //   // setPokemons( [...data])
      //   setPokemons([...pokemons, [...data]])
      // })
      // .catch(console.error)

    } catch (error) {
      console.log("error: ", error)
    }
  }

  useEffect(() => {
    getFetch()
  },[])

  return (
    <View style={ styles.home } >
      <PokemonList pokemons={pokemons}/>
      {/* <Button title='Go to Settings' onPress={() => navigation.push('Settings')} /> */}
      {/* <Button title='Go to Settings' onPress={() => navigation.navigate('Settings')} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    marginTop: 10
  }
});

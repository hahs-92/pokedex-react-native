import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from '../screens/Home';
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
        <Stack.Screen
            name="Pokedex"
            component={Home}
            // options={{  headerTitle:'Pokedex',  }}
        />
        <Stack.Screen
            name="Pokemon"
            component={Pokemon}
            options={{
              headerTitle:"",
              headerShown: true,
              headerTransparent: true
            }}
        />
    </Stack.Navigator>
  )
}

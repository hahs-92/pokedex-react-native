import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Favorite from '../screens/Favotire'
import Pokemon from '../screens/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={{  headerTitle:'Favoritos' }}
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
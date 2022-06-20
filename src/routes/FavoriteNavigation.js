import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Favorite from '../screens/Favotire'

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator >
        <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={{  headerTitle:'Favoritos' }}
        />
    </Stack.Navigator>
  )
}
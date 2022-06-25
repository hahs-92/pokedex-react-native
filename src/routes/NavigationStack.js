import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Home from '../screens/Home';
import Account from '../screens/Account';

const Stack = createNativeStackNavigator();


export default function NavigationStack() {
  return (
    <Stack.Navigator >
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Overview' }}
        />
        <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}

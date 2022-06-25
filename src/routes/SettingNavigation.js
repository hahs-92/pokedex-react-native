import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Account from '../screens/Account'

const Stack = createNativeStackNavigator();

export default function SettingNavigation() {
  return (
    <Stack.Navigator >
        <Stack.Screen
            name='Account'
            component={Account}
            options={{  headerTitle:'Ajustes',  }}
        />
    </Stack.Navigator>
  )
}

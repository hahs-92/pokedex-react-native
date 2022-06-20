import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Settings from '../screens/Settings'

const Stack = createNativeStackNavigator();

export default function SettingNavigation() {
  return (
    <Stack.Navigator >
        <Stack.Screen
            name='Settings'
            component={Settings}
            options={{  headerTitle:'Ajustes',  }}
        />
    </Stack.Navigator>
  )
}

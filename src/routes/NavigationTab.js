//ESTA NAV ES LA QUE SE ESTA UTILIZANDO¡

import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import { FontAwesome } from '@expo/vector-icons';
//navigations
import PokedexNavigation from './PokedexNavigation'
//screens
import Favorite from '../screens/Favotire';
import Account from '../screens/Account';


const Tab = createBottomTabNavigator();
// screenOptions={{ headerShown: false }}
export default function NavigationTab() {
  return (
   <Tab.Navigator  initialRouteName='Home'  screenOptions={{ headerShown: false }} >
        <Tab.Screen
          name="Fav"
          component={Favorite}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <Ionicons name='heart' color={color} size={ size} />
            )
          }}
        />
        <Tab.Screen
          name="Home"
          component={PokedexNavigation}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball()
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name='user' color={color} size={ size} />
            )
          }}
        />
   </Tab.Navigator>
  )
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ top: -15, width: 75, height: 75}}
    />
  )
}

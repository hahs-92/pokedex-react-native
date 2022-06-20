import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
//navigations
import PokedexNavigation from './PokedexNavigation'
import FavoriteNavigation from './FavoriteNavigation'
import SettingNavigation from './SettingNavigation'
//screens
import Home from '../screens/Home';
import Favorite from '../screens/Favotire';
import Settings from '../screens/Settings';
import Pokemon from '../screens/Pokemon';

const Tab = createBottomTabNavigator();
// screenOptions={{ headerShown: false }}
export default function NavigationTab() {
  return (
   <Tab.Navigator initialRouteName='Home'  screenOptions={{ headerShown: false }} >
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
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <Ionicons name='settings' color={color} size={ size} />
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
import { createDrawerNavigator } from '@react-navigation/drawer';
//screens
import Home from '../screens/Home';
import Account from '../screens/Account';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  )
}
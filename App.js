import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
//navigation
import NavigationStack from './src/routes/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
     <NavigationStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


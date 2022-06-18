import { NavigationContainer } from '@react-navigation/native'
//navigation
import NavigationStack from './src/routes/NavigationStack';
import NavigationTab from './src/routes/NavigationTab';

export default function App() {
  return (
    <NavigationContainer>
     {/* <NavigationStack /> */}
     <NavigationTab />
    </NavigationContainer>
  );
}



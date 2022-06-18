import { StyleSheet, Text, View } from 'react-native';
//components
// import LoginForm from './src/components/LoginForm';
import Greet from './src/components/Greet';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginForm /> */}
      <Greet name="Alex" />
      <Greet name="Jess" />
      <Greet />
    </View>
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

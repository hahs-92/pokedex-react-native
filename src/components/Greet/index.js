import { Text } from 'react-native'

function Greet( {name="Pepito" }) {
  return (
    <Text>Hi { name }</Text>
  )
}

export default Greet

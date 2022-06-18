import { Text } from 'react-native'
import PropTypes from 'prop-types'

function Greet( {name="Pepito", lastName }) {
  return (
    <Text>Hi { name } { lastName }</Text>
  )
}

Greet.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
}

export default Greet

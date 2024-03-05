import { Text, StyleSheet } from 'react-native'

const StyledText = ({ blue, bold, text, big, small, children }) => {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
  ]
  return <Text style={textStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
  },
  blue: {
    color: 'blue',
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
})

export default StyledText

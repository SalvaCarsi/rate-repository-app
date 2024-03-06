import { Text, StyleSheet } from 'react-native'

import theme from '../theme'

const StyledText = ({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.primary,
    color === 'secondary' && styles.secondary,
    fontSize === 'subheading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
  ]
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeigths.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeigths.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
})

export default StyledText

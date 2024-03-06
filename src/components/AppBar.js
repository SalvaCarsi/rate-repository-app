import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'

import StyledText from './StyledText'
import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    gap: 20,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
})

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to="/">
        Repositories
      </AppBarTab>
      <AppBarTab active to="/signin">
        Sign in
      </AppBarTab>
    </View>
  )
}

export default AppBar

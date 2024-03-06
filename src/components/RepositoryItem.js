import { View, StyleSheet } from 'react-native'

import RepositoryStats from './RepositoryStats'
import StyledText from './StyledText'

const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id} style={styles.container}>
      <StyledText fontWeight="bold" fontSize="subheading">
        {item.fullName}
      </StyledText>
      <StyledText>{item.description}</StyledText>
      <StyledText>{item.language}</StyledText>
      <RepositoryStats {...item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 5, paddingTop: 5 },
})

export default RepositoryItem

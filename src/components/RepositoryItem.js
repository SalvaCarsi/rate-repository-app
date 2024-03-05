import { View, StyleSheet } from 'react-native'

import StyledText from './StyledText'

const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id} style={styles.container}>
      <StyledText bold blue big>
        id: {item.id}
      </StyledText>
      <StyledText bold>Fullname: {item.fullName}</StyledText>
      <StyledText bold>Description: {item.description}</StyledText>
      <StyledText bold>Language: {item.language}</StyledText>
      <StyledText small>Stars: {item.stargazersCount}</StyledText>
      <StyledText small>Forks: {item.forksCount}</StyledText>
      <StyledText small>Review: {item.reviewCount}</StyledText>
      <StyledText small>Rating: {item.ratingAverage}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 5, paddingTop: 5 },
})

export default RepositoryItem

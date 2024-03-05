import { View, Text } from 'react-native'

const RepositoryItem = (item) => {
  return (
    <View
      key={item.id}
      style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}
    >
      <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>id: {item.id}</Text>
      <Text>Fullname: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Review: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem

import { View, Text, FlatList } from 'react-native'

import repositories from '../data/repositories.js'

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item }) => {
        return (
          <View key={item.id}>
            <Text>id: {item.id}</Text>
            <Text>Fullname: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Review: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
          </View>
        )
      }}
    />
  )
}

export default RepositoryList

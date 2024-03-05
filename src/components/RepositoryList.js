import { Text, FlatList } from 'react-native'

import RepositoryItem from './RepositoryItem'
import repositories from '../data/repositories.js'

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => {
        return <RepositoryItem item={item} />
      }}
    />
  )
}

export default RepositoryList

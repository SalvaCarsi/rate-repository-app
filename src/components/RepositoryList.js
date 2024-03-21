import { Text, FlatList } from 'react-native'
import { useRepositories } from '../hooks/useRepositories'

import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  const { repositories } = useRepositories()

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

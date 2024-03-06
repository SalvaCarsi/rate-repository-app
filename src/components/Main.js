import { View } from 'react-native'

import AppBar from './AppBar'
import RepositoryList from './RepositoryList'

const Main = () => {
  return (
    <View style={{ flex: 1, paddingBottom: 40 }}>
      <AppBar />
      <RepositoryList />
    </View>
  )
}

export default Main

import { View, Text } from 'react-native'
import { NativeRouter, Route, Routes } from 'react-router-native'

import AppBar from './AppBar'
import RepositoryList from './RepositoryList'

const Main = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1, paddingBottom: 40 }}>
        <AppBar />
        <Routes>
          <Route path="/" exact element={<RepositoryList />} />
          <Route path="/signin" exact element={<Text>Working on it!</Text>} />
        </Routes>
      </View>
    </NativeRouter>
  )
}

export default Main

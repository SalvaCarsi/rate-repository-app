import { View, StyleSheet, Image } from 'react-native'

import RepositoryStats from './RepositoryStats'
import StyledText from './StyledText'
import theme from '../theme'

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={{ flexDirection: 'row', paddingBotton: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">{fullName}</StyledText>
        <StyledText color="secondary">{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = ({ item }) => {
  return (
    <View key={item.id} style={styles.container}>
      <RepositoryItemHeader {...item} />
      <RepositoryStats {...item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 5 },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
})

export default RepositoryItem
